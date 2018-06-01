import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { EmpresaProvider } from './../../providers/empresa/empresa';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-empresacadastrar',
  templateUrl: 'empresacadastrar.html',
})
export class EmpresacadastrarPage {s
  title: string;
	form: FormGroup;
	empresa: any;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	private formBuilder: FormBuilder,
  	private provider: EmpresaProvider,
  	private toast: ToastController) {

  	this.empresa = this.navParams.data.empresa || {};
  	this.createForm();

  	this.setupPageTitle();
  }

  private setupPageTitle() {
    this.title = this.navParams.data.empresa ? 'Alterando empresa' : 'Cadastro da Empresa';
  }


  createForm(){
  	this.form = this.formBuilder.group({
  		key:           [this.empresa.key],
      cnpj:          [this.empresa.cnpj, Validators.required],
      nomefantasia:  [this.empresa.nomefantasia, Validators.required],
      ramoatividade: [this.empresa.ramoatividade, Validators.required],
      endereco:      [this.empresa.endereco, Validators.required],
      num:           [this.empresa.num, Validators.required],
      bairro:        [this.empresa.bairro, Validators.required],
      cep:           [this.empresa.cep, Validators.required],
      cidade:        [this.empresa.cidade, Validators.required],
      fone1:         [this.empresa.fone1, Validators.required],
      fone2:         [this.empresa.fone2],
      celular:       [this.empresa.celular],
      siteempresa:   [this.empresa.siteempresa],
      horarioatend1: [this.empresa.horarioatend1, Validators.required],
      horarioatend2: [this.empresa.horarioatend2],
      horarioatend3: [this.empresa.horarioatend3],
      email:         [this.empresa.email, Validators.required],
      senha:         [this.empresa.senha, Validators.required],
      tipoconta:     [this.empresa.tipoconta, Validators.required]
 
  	});
  }

  onSubmit(){
  	if (this.form.valid) {
  		this.provider.save(this.form.value)
  		.then(() => {
  			this.toast.create({ message: 'Empresa cadastrada.', duration: 3000 }).present();
  			this.navCtrl.pop();
  		})
  		.catch((e) => {
  			this.toast.create({ message: 'Erro ao salvar empresa.', duration: 3000 }).present();
  			console.error(e);
  		});
  	}
  }

}
