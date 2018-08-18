import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { OfertaProvider } from './../../providers/oferta/oferta';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { transition } from '@angular/core/src/animation/dsl';

@IonicPage()
@Component({
  selector: 'page-ofertacadastrar',
  templateUrl: 'ofertacadastrar.html',
})
export class OfertacadastrarPage {
	photo: string = '';

  	title: string;
	form: FormGroup;
	oferta: any;



  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	private formBuilder: FormBuilder,
  	private provider: OfertaProvider,
	private toast: ToastController,
	private camera: Camera) {

  	this.oferta = this.navParams.data.oferta || {};
  	this.createForm();

  	this.setupPageTitle();
  }

  private setupPageTitle() {
    this.title = this.navParams.data.oferta ? 'Alterando oferta' : 'Cadastro da oferta';
  }

  createForm(){
  	this.form = this.formBuilder.group({
  		key:         [this.oferta.key],
  		nomeempresa: [this.oferta.nomeempresa],
  		dataoferta:  [this.oferta.dataoferta],
  		obs:         [this.oferta.obs],
      descricao:   [this.oferta.descricao, Validators.required],
      imagem:      [this.oferta.imagem, Validators.required],
      preco:       [this.oferta.preco, Validators.required],
      item:        [this.oferta.item, Validators.required] 
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
	
	takePicture() {
		this.photo = '';
	
		const options: CameraOptions = {
		  quality: 100,
		  destinationType: this.camera.DestinationType.DATA_URL,
		  encodingType: this.camera.EncodingType.JPEG,
		  mediaType: this.camera.MediaType.PICTURE,
		  allowEdit: true,
		  targetWidth: 100,
		  targetHeight: 100
		}
	
		this.camera.getPicture(options)
		  .then((imageData) => {
			let base64image = 'data:image/jpeg;base64,' + imageData;
			this.photo = base64image;
	
		  }, (error) => {
			// console.error(error);
		  })
		  .catch((error) => {
			// console.error(error);
		  })
	  }

}
