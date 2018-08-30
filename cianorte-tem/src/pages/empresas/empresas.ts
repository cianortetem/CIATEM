import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { HomePage } from '../home/home';
import { EmpresacadastrarPage } from '../empresacadastrar/empresacadastrar';
import { EmpresadetalhesPage } from '../empresadetalhes/empresadetalhes';

import { EmpresaProvider } from '../../providers/empresa/empresa';
import { OfertaPage } from '../oferta/oferta';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-empresas',
  templateUrl: 'empresas.html',
})
export class EmpresasPage {

  public obj: any;
  public result: any;

  empresas: Observable<any>;

  empresaCategoria: any = {};

  dd: any;

  mostrar = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private provider: EmpresaProvider,
    private banco: AngularFireDatabase,
  	private toast: ToastController) {

      this.empresaCategoria = this.navParams.data;
      console.log(this.empresaCategoria);
      // this.empresas = this.provider.getAll();
      
      console.log(this.empresas = this.provider.categoriadaEmpresa('ramoatividade',this.empresaCategoria));
      // this.empresas = this.provider.categoriadaEmpresa('ramoatividade', this.empresas.toPromise);
      // console.log(this.provider.categoriadaEmpresa('ramoatividade', this.empresaCategoria.get).subscribe(resp => this.mostrar = resp));


  // console.log(this.empresas = this.provider.categoriadaEmpresa('ramoatividade', this.empresaCategoria.ramoatividade).subscribe(resp => this.mostrar = resp));
      
     

 
  }


  novaEmpresa(){
    this.navCtrl.push(EmpresacadastrarPage);
  }

  ofertasPage(){
    this.navCtrl.push(OfertaPage);
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
   this.navCtrl.setRoot(HomePage);
 }
  empresasDetalhes(empresa: any){
   this.navCtrl.push(EmpresadetalhesPage,{dadosEmpresa:empresa});
 }

}
