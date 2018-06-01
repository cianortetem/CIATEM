import { Injectable} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CategoriaProvider {

	private PATH = 'categorias/';

  constructor(private db: AngularFireDatabase) { }

  getAll(){
  	return this.db.list(this.PATH, ref => ref.orderByChild('name'))
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

  save(categoria: any){
  	return new Promise((resolve, reject) =>{
  		if (categoria.key) {
  			this.db.list(this.PATH)
  			.update(categoria.key, { name: categoria.name })
  			.then(() => resolve())
  			.catch((e) => reject(e));
  		}else{
			//inserindo dados
  			this.db.list(this.PATH)
  			.push({ name: categoria.name })
  			.then(() => resolve());
  		}
  	});
  }
  remove(key: string){
  	return this.db.list(this.PATH).remove(key);
  }

}
