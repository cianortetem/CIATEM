import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CategoriaProvider } from './../../providers/categoria/categoria';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@IonicPage()
@Component({
  selector: 'page-categoriacadastrar',
  templateUrl: 'categoriacadastrar.html',
})
export class CategoriacadastrarPage {

  title: string;
	form: FormGroup;
	categoria: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  	private formBuilder: FormBuilder,
  	private provider: CategoriaProvider,
    private toast: ToastController) {

    this.categoria = this.navParams.data.categoria || {};
  	this.criaForm();

  	this.setupPageTitle();
  }

  private setupPageTitle() {
    this.title = this.navParams.data.categoria ? 'Alterando a categoria' : 'Nova categoria';
  }

  criaForm(){
  	this.form = this.formBuilder.group({
  		key:[this.categoria.key],
  		name: [this.categoria.name, Validators.required]
  	});
  }

  salvarCategoria(){
  	if (this.form.valid) {
  		this.provider.save(this.form.value)
  		.then(() => {
  			this.toast.create({ message: 'Categoria cadastrada.', duration: 3000 }).present();
  			this.navCtrl.pop();
  		})
  		.catch((e) => {
  			this.toast.create({ message: 'Erro ao cadastrar categoria.', duration: 3000 }).present();
  			console.error(e);
  		});
  	}
  }

}
