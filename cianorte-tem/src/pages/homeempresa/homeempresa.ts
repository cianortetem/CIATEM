import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-homeempresa',
  templateUrl: 'homeempresa.html',
})
export class HomeempresaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  homePage(){
    this.navCtrl.setRoot(HomePage);
  }
}
