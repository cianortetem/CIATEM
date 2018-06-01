import { Component } from '@angular/core';
<<<<<<< HEAD
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { OfertaProvider } from './../../providers/oferta/oferta';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
=======
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the OfertacadastrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
>>>>>>> d9889830ca63872d343338ed3f9d5371054c5a68

@IonicPage()
@Component({
  selector: 'page-ofertacadastrar',
  templateUrl: 'ofertacadastrar.html',
})
export class OfertacadastrarPage {
<<<<<<< HEAD
	
  title: string;
	form: FormGroup;
	oferta: any;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	private formBuilder: FormBuilder,
  	private provider: OfertaProvider,
  	private toast: ToastController) {

  	this.oferta = this.navParams.data.oferta || {};
  	this.createForm();

  	this.setupPageTitle();
  }

  private setupPageTitle() {
    this.title = this.navParams.data.oferta ? 'Alterando oferta' : 'Cadastro da oferta';
  }

  createForm(){
  	this.form = this.formBuilder.group({
  		key:        [this.oferta.key],
  		dataoferta: [this.oferta.dataoferta],
  		obs:        [this.oferta.obs],
      descricao:  [this.oferta.descricao, Validators.required],
      imagem:     [this.oferta.imagem, Validators.required],
      preco:      [this.oferta.preco, Validators.required],
      item:       [this.oferta.item, Validators.required] 
  	});
  }

  onSubmit(){
  	if (this.form.valid) {
  		this.provider.save(this.form.value)
  		.then(() => {
  			this.toast.create({ message: 'Oferta cadastrada.', duration: 3000 }).present();
  			this.navCtrl.pop();
  		})
  		.catch((e) => {
  			this.toast.create({ message: 'Erro ao cadastrar oferta.', duration: 3000 }).present();
  			console.error(e);
  		});
  	}
  }

=======

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfertacadastrarPage');
  }

    loginPage(){
      // this.afAuth.auth.signOut();
      this.navCtrl.setRoot(LoginPage);
    }
  
>>>>>>> d9889830ca63872d343338ed3f9d5371054c5a68
}
