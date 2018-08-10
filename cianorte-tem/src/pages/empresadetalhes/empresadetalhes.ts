import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OfertaPage } from '../oferta/oferta';


@IonicPage()
@Component({
  selector: 'page-empresadetalhes',
  templateUrl: 'empresadetalhes.html',
})
export class EmpresadetalhesPage {

  fundoLogin = [
    'assets/imgs/fundoLogin/fundo.jpg'
   ]


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpresadetalhesPage');
  }

  ofertasPage(){
    this.navCtrl.push(OfertaPage);
  }
 

}
