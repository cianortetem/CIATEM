import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, ToastController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ResetsenhaPage } from '../resetsenha/resetsenha';
import { CadastrarusuarioPage } from '../cadastrarusuario/cadastrarusuario';
import { User } from "../../models/users";
import { AngularFireAuth} from "angularfire2/auth";
import { LoginusuariosPage } from '../auth/loginusuarios/loginusuarios';
import { CadusuariosPage } from '../auth/cadusuarios/cadusuarios';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController) {

  }

  fazerLogin(user: User) {
    try{
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if(result){
        this.navCtrl.setRoot(LoginusuariosPage);
      }else{
        this.toastCtrl.create({
          message: 'Usuário ou senha inconrretos, tente novamente!',
          duration: 3000
        }).present();
      }
    }catch(e){
      console.log(e);
    }
  }

  sair(){
    // this.afAuth.auth.signOut();
    this.navCtrl.setRoot(LoginPage);
  }

  cadastrarUsuario(){
      this.navCtrl.push(LoginusuariosPage);
  }

paginaHome(){
    this.navCtrl.setRoot(HomePage);
  }

  reset_senha(){
    this.navCtrl.push(ResetsenhaPage);
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Atenção',
      subTitle: 'Não há nada para cancelar ainda!',
      buttons: ['SAIR']
    });
    alert.present();
  }

  alertaLogin() {
    let alert = this.alertCtrl.create({
      title: 'Atenção',
      subTitle: 'Não é possível fazer login ainda!',
      buttons: ['SAIR']
    });
    alert.present();
  }

  toastEntrar() {
    let toast = this.toastCtrl.create({
      message: 'Usuário ou senha inconrretos, tente novamente!',
      duration: 3000
    });
    toast.present();
  }

    cadastrar_se() {
    let alert = this.alertCtrl.create();
    alert.setTitle('O que deseja cadastrar');

    alert.addInput({
      type: 'radio',
      label: 'EMPRESA',
      value: 'blue',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: 'E-MAIL',
      value: 'blue'
    });

    alert.addButton('SAIR');
    alert.addButton({
      text: 'OK',
      handler: data => {
        // this.testRadioOpen = false;
        // this.testRadioResult = data;
      }
    });
    alert.present();
  }

}
