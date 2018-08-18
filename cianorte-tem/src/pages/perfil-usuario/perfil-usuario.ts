import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { UsuarioPerfilProvider } from '../../providers/usuario-perfil/usuario-perfil';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-perfil-usuario',
  templateUrl: 'perfil-usuario.html',
})
export class PerfilUsuarioPage {

  usuario : any;
  userProfile: Observable<any>;

  public obj: any;
  public result: any;

  constructor(
  	public navCtrl: NavController,
    private provider: UsuarioPerfilProvider,
    public  navParams: NavParams,
  	private toast: ToastController) {
      this.usuario = this.navParams.get('usuario');
    this.userProfile = this.provider.getAll();
  }


  
  // editaOferta(oferta: any){
  // 	this.navCtrl.push(OfertacadastrarPage, { oferta: oferta });
  // }

  removeUsuario(key: string){
  	this.provider.remove(key)
  	.then(() => {
  		this.toast.create({ message: 'Cadastro excluído!', duration: 3000 }).present();
  	})
  	.catch(() => {
  		this.toast.create({ message: 'Erro ao excluir cadastro!', duration: 3000 }).present();
  	})
  }

 homePage(){
  this.navCtrl.setRoot(HomePage);
}

//  userDetalhes(oferta: any){
//   this.navCtrl.push(OfertadetalhesPage,{dadosOferta: oferta});
// }

}
