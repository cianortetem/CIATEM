import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, LoadingController } from 'ionic-angular';
import { LoginPage } from "../login/login";
import { HomePage } from "../home/home";
import { User } from "../../models/users";
import { AngularFireAuth } from "angularfire2/auth";


import { AuthProvider } from '../../providers/auth/auth.1';

import { FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-cadastrarusuario',
  templateUrl: 'cadastrarusuario.html',
})
export class CadastrarusuarioPage {
  user = {} as User;

  /*constructor(
      private afAuth: AngularFireAuth,
      public navCtrl: NavController,
      public navParams: NavParams,
      private ToastCtrl: ToastController
      ) {

  }

  /*async criarConta(user: User){
    try{
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      // console.log(result);
      this.navCtrl.setRoot(HomePage);
      this.ToastCtrl.create({
        message: 'Usuário cadastrado com sucesso!',
        duration: 3000
      }).present();
    }catch(e){
      console.error(e);
    }
  }*/

  sair(){
    this.navCtrl.setRoot(LoginPage);
  }

  signupForm: any;

  constructor(
    public auth: AuthProvider,
    public loading: LoadingController,
    public alert: AlertController,
    public formBuilder: FormBuilder,
    public navCtrl: NavController,
    public toast: ToastController,
    public navParams: NavParams) {
      this.signupForm = formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(20), Validators.required])],
        passwordConfirmation: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(20), Validators.required])],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        perfil:['']
          })
    }

  signup(){
    let {firstName} = this.signupForm.controls;
    let NomeErrado = firstName.value == "";
    if (NomeErrado){
      const alert = this.alert.create({
        title: 'Ops!',
        subTitle: 'Preencha o campo nome',
        buttons: ['OK']
      });alert.present();      
    } else {
      let {lastName} = this.signupForm.controls;
      let SobreNomeErrado = lastName.value == "";
      if (SobreNomeErrado){
        const alert = this.alert.create({
          title: 'Ops!',
          subTitle: 'Preencha o campo Sobrenome!',
          buttons: ['OK']
        });alert.present();
        
      } else {
        let {email} = this.signupForm.controls;
        let emailErrado = email.value == "";
        if (emailErrado){
          const alert = this.alert.create({
            title: 'Ops!',
            subTitle: 'Preencha o campo e-mail!',
            buttons: ['OK']
          });alert.present();      
        }else{
          let {password, passwordConfirmation} = this.signupForm.controls;
          let passwordErrado = password.value != passwordConfirmation.value;
          if (passwordErrado){
            const alert = this.alert.create({
              title: 'Ops!',
              subTitle: 'Senha não confere ou menor que 6 dígitos!',
              buttons: ['OK']
            });alert.present();
          }else {
            let loading = this.loading.create({
              content: 'Criando Usuário...'
            });loading.present();

            let { email, password, firstName, lastName, perfil} = this.signupForm.value;
            this.auth.signupUser( email, password, firstName, lastName, perfil).then(() =>{
              loading.dismiss();
              let toast = this.toast.create({
                message: 'Cadastro concluído!',
                duration: 3000
              });toast.present();
              this.navCtrl.setRoot(HomePage)
            }, (error) =>{
              loading.dismiss();
                const alert = this.alert.create({
                  title: 'Ops!',
                  subTitle: 'Usuário não cadastrado! Certifique-se se todas informações estão corretas ou tente fazer login.',
                  buttons: ['OK']
                });alert.present();
            })
          } 
        }
      }     
    }
  }

}
