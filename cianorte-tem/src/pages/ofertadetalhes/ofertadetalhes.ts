import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OfertaProvider } from '../../providers/oferta/oferta';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-ofertadetalhes',
  templateUrl: 'ofertadetalhes.html',
})
export class OfertadetalhesPage {
  ofertas: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	private provider: OfertaProvider) {
      this.ofertas = this.provider.getAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfertadetalhesPage');
  }

}
