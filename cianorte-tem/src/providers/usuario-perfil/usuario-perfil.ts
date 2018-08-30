import { Injectable} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';


@Injectable()
export class UsuarioPerfilProvider {

	private PATH = 'userProfile/';

  constructor(
	  private db: AngularFireDatabase,
      private storage: Storage,
      private datepipe: DatePipe) { 

		 }

  getAll(){
  	return this.db.list(this.PATH, ref => ref.orderByChild('firstName'))
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


  remove(key: string){
  	return this.db.list(this.PATH).remove(key);
  }

}
