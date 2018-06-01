import { CategoriaProvider } from './../../providers/categoria/categoria';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { LoginPage } from '../login/login';
import { CategoriasPage } from '../categorias/categorias';
import { CategoriacadastrarPage } from '../categoriacadastrar/categoriacadastrar';
import { EmpresacadastrarPage } from '../empresacadastrar/empresacadastrar';
import { EmpresasPage } from '../empresas/empresas';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public obj: any;
  public result: any;

  categorias: Observable<any>;

  constructor(
  	public navCtrl: NavController,
  	private provider: CategoriaProvider,
  	private toast: ToastController) {
    
    // lista todas as categorias
    this.categorias = this.provider.getAll();
  }
  // 
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

