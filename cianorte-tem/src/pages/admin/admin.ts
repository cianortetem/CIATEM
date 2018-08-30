import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CategoriasPage } from '../categorias/categorias';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { EmpresasPage } from '../empresas/empresas';
import { OfertaPage } from '../oferta/oferta';
import { AdminEmpresasPage } from '../admin-empresas/admin-empresas';
import { AdminOfertasPage } from '../admin-ofertas/admin-ofertas';

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alert: AlertController) {
  }

  HomePage(){
    this.navCtrl.push(HomePage);
  }

  CategoriaPage(){
    this.navCtrl.push(CategoriasPage);
  }

  AdminEmpresasPage(){
    this.navCtrl.push(AdminEmpresasPage);
  }

  AdminOfertasPage(){
    this.navCtrl.push(AdminOfertasPage);
  }

  
  logoff() {
    const confirm = this.alert.create({
      title: 'Tem certeza que deseja encerrar?',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.navCtrl.setRoot(LoginPage);
          }
        },
        {
          text: 'Cancelar',
          handler: () => {
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

}
