import { Injectable} from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';



@Injectable()
export class EmpresaProvider {

	seila: AngularFireList<any>;

	public empresaCategoria: any;

	private PATH = 'empresas/';

  constructor(private db: AngularFireDatabase) {
		this.seila = db.list('empresas');
   }

//   getAll(){
//   	return this.db.list(this.PATH, ref => ref.orderByChild('ramoatividade').equalTo(this.empresaCategoria))
//   		.snapshotChanges()
//   		.map(changes => {
//   			return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
//   		})
//   }
  getAll(){
  	return this.db.list(this.PATH, ref => ref.orderByChild('name'))
  		.snapshotChanges()
  		.map(changes => {
  			return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
  		})
  }

  getByQuery(orderby, equal) {
    return this.db.list('foto', ref => ref.orderByChild(orderby).equalTo(equal)).snapshotChanges();
  }


  categoriadaEmpresa(ramoatividade, empresaCategoria){
	return this.db.list('empresas', ref => ref.orderByChild('ramoatividade').equalTo(ramoatividade)).snapshotChanges();
  }

  get(key: string){
  	return this.db.object(this.PATH + key)
  	.snapshotChanges()
  	.map(c => {
  		return { key: c.key, ...c.payload.val() };
  	})
  }

  save(empresa: any){
  	return new Promise((resolve, reject) =>{
  		if (empresa.key) {
  			this.db.list(this.PATH)
  			.update(
				  empresa.key, { 
						perfil:        empresa.perfil, 
						cnpj:          empresa.cnpj, 
						nomefantasia:  empresa.nomefantasia, 
						ramoatividade: empresa.ramoatividade, 
						endereco:      empresa.endereco, 
						num:           empresa.num, 
						bairro:        empresa.bairro, 
						cep:           empresa.cep, 
						cidade:        empresa.cidade, 
						fone1:         empresa.fone1,
						fone2:         empresa.fone2,
						celular:       empresa.celular,
						siteempresa:   empresa.siteempresa,
						horarioatend1: empresa.horarioatend1,
						horarioatend2: empresa.horarioatend2,
						horarioatend3: empresa.horarioatend3, 
						email:		   empresa.email,
						senha:         empresa.senha, 
						tipoconta:     empresa.tipoconta })
  			.then(() => resolve())
  			.catch((e) => reject(e));
  		}else{
			//inserindo dados
  			this.db.list(this.PATH)
  			.push({ 
				perfil:        empresa.perfil, 
				cnpj:          empresa.cnpj, 
				nomefantasia:  empresa.nomefantasia, 
				ramoatividade: empresa.ramoatividade, 
				endereco:      empresa.endereco, 
				num:           empresa.num, 
				bairro:        empresa.bairro, 
				cep:           empresa.cep, 
				cidade:        empresa.cidade, 
				fone1:         empresa.fone1,
				fone2:         empresa.fone2,
				celular:       empresa.celular,
				siteempresa:   empresa.siteempresa,
				horarioatend1: empresa.horarioatend1,
				horarioatend2: empresa.horarioatend2,
				horarioatend3: empresa.horarioatend3, 
				email:		   empresa.email,
				senha:         empresa.senha, 
				tipoconta:     empresa.tipoconta })
  			.then(() => resolve());
  		}
  	});
  }
  remove(key: string){
  	return this.db.list(this.PATH).remove(key);
  }

}