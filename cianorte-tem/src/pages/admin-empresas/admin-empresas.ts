import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { EmpresaProvider } from '../../providers/empresa/empresa';
import { EmpresacadastrarPage } from '../empresacadastrar/empresacadastrar';



@IonicPage()
@Component({
  selector: 'page-admin-empresas',
  templateUrl: 'admin-empresas.html',
})
export class AdminEmpresasPage {

  public obj: any;
  public result: any;
  
  empresas: Observable<any>;

  constructor(
  	public navCtrl: NavController,
  	private provider: EmpresaProvider,
    private toast: ToastController,
    public alert: AlertController) {
      this.empresas = this.provider.getAll();
  }

  CadastrarEmpresa(){
    this.navCtrl.push(EmpresacadastrarPage);
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
