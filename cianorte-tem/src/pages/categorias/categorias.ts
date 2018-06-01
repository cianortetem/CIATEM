import { CategoriaProvider } from './../../providers/categoria/categoria';
import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HomePage } from '../home/home';
import { CategoriacadastrarPage } from '../categoriacadastrar/categoriacadastrar';

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {
  categorias: Observable<any>;

  constructor(
  	public navCtrl: NavController,
  	private provider: CategoriaProvider,
  	private toast: ToastController) {

    this.categorias = this.provider.getAll();
  }

  novaCategoria(){
    this.navCtrl.push(CategoriacadastrarPage);
  }
  
  editaCategoria(categoria: any){
  	this.navCtrl.push(CategoriacadastrarPage, { categoria: categoria });
  }

  removeCategoria(key: string){
  	this.provider.remove(key)
  	.then(() => {
  		this.toast.create({ message: 'Categoria removida!', duration: 3000 }).present();
  	})
  	.catch(() => {
  		this.toast.create({ message: 'Erro ao excluir categoria!', duration: 3000 }).present();
  	})
  }

  homePage(){
   this.navCtrl.setRoot(HomePage);
 }

}
