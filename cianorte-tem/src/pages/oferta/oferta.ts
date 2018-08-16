import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HomePage } from '../home/home';
import { OfertaProvider } from '../../providers/oferta/oferta';
import { OfertacadastrarPage } from '../ofertacadastrar/ofertacadastrar';
import { OfertadetalhesPage } from '../ofertadetalhes/ofertadetalhes';

@IonicPage()
@Component({
  selector: 'page-oferta',
  templateUrl: 'oferta.html',
})
export class OfertaPage {
  ofertas: Observable<any>;

  public obj: any;
  public result: any;

  constructor(
  	public navCtrl: NavController,
  	private provider: OfertaProvider,
  	private toast: ToastController) {

    this.ofertas = this.provider.getAll();
  }

  novaOferta(){
    this.navCtrl.push(OfertacadastrarPage);
  }
  
  editaOferta(oferta: any){
  	this.navCtrl.push(OfertacadastrarPage, { oferta: oferta });
  }

  removeOferta(key: string){
  	this.provider.remove(key)
  	.then(() => {
  		this.toast.create({ message: 'Oferta removida!', duration: 3000 }).present();
  	})
  	.catch(() => {
  		this.toast.create({ message: 'Erro ao excluir oferta!', duration: 3000 }).present();
  	})
  }

  homePage(){
   this.navCtrl.setRoot(HomePage);
 }

 ofertaDetalhes(oferta: any){
  this.navCtrl.push(OfertadetalhesPage,{dadosOferta: oferta});
}

}
