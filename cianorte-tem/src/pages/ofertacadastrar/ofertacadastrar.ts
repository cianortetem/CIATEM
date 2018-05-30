import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the OfertacadastrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ofertacadastrar',
  templateUrl: 'ofertacadastrar.html',
})
export class OfertacadastrarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfertacadastrarPage');
  }

    loginPage(){
      // this.afAuth.auth.signOut();
      this.navCtrl.setRoot(LoginPage);
    }
  
}
