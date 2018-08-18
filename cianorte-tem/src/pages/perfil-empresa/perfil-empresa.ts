import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { EmpresaProvider } from '../../providers/empresa/empresa';
import { HomePage } from '../home/home';
import { OfertaPage } from '../oferta/oferta';
import { EmpresacadastrarPage } from '../empresacadastrar/empresacadastrar';
import { OfertacadastrarPage } from '../ofertacadastrar/ofertacadastrar';


@IonicPage()
@Component({
  selector: 'page-perfil-empresa',
  templateUrl: 'perfil-empresa.html',
})
export class PerfilEmpresaPage {

  public obj: any;
  public result: any;
  
  empresas: Observable<any>;

  constructor(
  	public navCtrl: NavController,
  	private provider: EmpresaProvider,
  	private toast: ToastController) {
      this.empresas = this.provider.getAll();
  }
  
  ofertasPage(){
    this.navCtrl.push(OfertaPage);
  }
  
  ofertasCadastrarPage(){
    this.navCtrl.push(OfertacadastrarPage);
  }
  
  editaEmpresa(empresa: any){
  	this.navCtrl.push(EmpresacadastrarPage, { empresa: empresa });
  }

  removeEmpresa(key: string){
  	this.provider.remove(key)
  	.then(() => {
  		this.toast.create({ message: 'Empresa removida!', duration: 3000 }).present();
  	})
  	.catch(() => {
  		this.toast.create({ message: 'Erro ao excluir empresa!', duration: 3000 }).present();
  	})
  }

  homePage(){
   this.navCtrl.pop();
 }

}
