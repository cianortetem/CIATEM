import { Injectable} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class OfertaProvider {

	private PATH = 'ofertas/';

  constructor(private db: AngularFireDatabase) { }

  getAll(){
  	return this.db.list(this.PATH)
  		.snapshotChanges()
  		.map(changes => {
  			return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
  		})
  }

  get(key: string){
  	return this.db.object(this.PATH + key)
  	.snapshotChanges()
  	.map(c => {
  		return { key: c.key, ...c.payload.val() };
  	})
  }

  save(oferta: any){
  	return new Promise((resolve, reject) =>{
  		if (oferta.key) {
  			this.db.list(this.PATH)
  			.update(oferta.key, { 
				  	dataoferta: oferta.dataoferta,
				  	obs: oferta.obs,
					descricao: oferta.descricao,
				  	imagem: oferta.imagem,
				  	preco: oferta.preco,
				  	item: oferta.item
				})
  			.then(() => resolve())
  			.catch((e) => reject(e));
  		}else{
			//inserindo dados
  			this.db.list(this.PATH)
  			.push({ 
					dataoferta: oferta.dataoferta,
					obs: oferta.obs,
					descricao: oferta.descricao,
					imagem: oferta.imagem,
					preco: oferta.preco,
					item: oferta.item 
				})
  			.then(() => resolve());
  		}
  	});
  }
  remove(key: string){
  	return this.db.list(this.PATH).remove(key);
  }

}
