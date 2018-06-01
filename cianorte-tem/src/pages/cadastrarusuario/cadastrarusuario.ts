import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginPage } from "../login/login";
import { HomePage } from "../home/home";
import { User } from "../../models/users";
import { AngularFireAuth } from "angularfire2/auth";

@IonicPage()
@Component({
  selector: 'page-cadastrarusuario',
  templateUrl: 'cadastrarusuario.html',
})
export class CadastrarusuarioPage {
  user = {} as User;

  constructor(
      private afAuth: AngularFireAuth,
      public navCtrl: NavController,
      public navParams: NavParams,
      private ToastCtrl: ToastController
      ) {

  }

  async criarConta(user: User){
    try{
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      // console.log(result);
      this.navCtrl.setRoot(HomePage);
      this.ToastCtrl.create({
        message: 'Usuário cadastrado com sucesso!',
        duration: 3000
      }).present();
    }catch(e){
      console.error(e);
    }
  }

  sair(){
    this.navCtrl.setRoot(LoginPage);
  }

}
