import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

import { AuthProvider } from '../../../providers/auth/auth';

import { FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  backgrounds = [
    'assets/imgs/background/background-1.jpg',
    'assets/imgs/background/background-2.jpg',
    'assets/imgs/background/background-3.jpg',
    'assets/imgs/background/background-4.jpg',
    'assets/imgs/background/background-5.jpg',
    'assets/imgs/background/background-6.mp4'
  ]

  signupForm: any;

  constructor(public auth: AuthProvider, public loading: LoadingController, public alert: AlertController, public formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    this.signupForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(20), Validators.required])],
      passwordConfirmation: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(20), Validators.required])],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
        })
  }

  signup(){
   let {password, passwordConfirmation} = this.signupForm.controls;
   let passwordErrado = password.value != passwordConfirmation.value;
    if (passwordErrado){
      const alert = this.alert.create({
        title: 'Ops!',
        subTitle: 'Corrige ai mano a senha!',
        buttons: ['OK']
      });
      alert.present();
    } else {
      let loading = this.loading.create({
        content: 'Criando Usuário...'
      });
      loading.present();

      let { email, password, firstName, lastName} = this.signupForm.value;
      this.auth.signupUser( email, password, firstName, lastName).then(() =>{
        loading.dismiss();
        const alert = this.alert.create({
         title: 'Eba!',
         subTitle: 'Deu certo mano!',
         buttons: ['OK']
      });
      alert.present();
    }, (error) =>{
      loading.dismiss();
        const alert = this.alert.create({
         title: 'Ops!',
         subTitle: 'Usuário não cadastrado!',
         buttons: ['OK']
        });
        alert.present();
      })
    }
  }
}