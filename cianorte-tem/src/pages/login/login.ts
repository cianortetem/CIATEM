import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, ToastController, NavParams, Platform, ActionSheetController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ResetsenhaPage } from '../resetsenha/resetsenha';
import { CadastrarusuarioPage } from '../cadastrarusuario/cadastrarusuario';
import { User } from "../../models/users";
import { AngularFireAuth} from "angularfire2/auth";
import { LoginusuariosPage } from '../auth/loginusuarios/loginusuarios';
import { CadusuariosPage } from '../auth/cadusuarios/cadusuarios';
import { EmpresacadastrarPage } from '../empresacadastrar/empresacadastrar';
import { PerfilUsuarioPage } from '../perfil-usuario/perfil-usuario';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController) { }

  fazerLogin(user: User) {
    try{
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if(result){
        this.navCtrl.setRoot(HomePage, {usuario: user});
      }else{
        this.toastCtrl.create({
          message: 'Usuário ou senha inconrretos, tente novamente!',
          duration: 3000
        }).present();
      }
    }catch(e){
      console.log(e);
    }
  }

  sair(){
    // this.afAuth.auth.signOut();
    this.navCtrl.setRoot(LoginPage);
  }

  cadastroEmpresa(){
    this.navCtrl.push(EmpresacadastrarPage);
  }

  cadastrarUsuario(){
      this.navCtrl.push(CadastrarusuarioPage);
  }

  reset_senha(){
    this.navCtrl.push(ResetsenhaPage);
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Atenção',
      subTitle: 'Não há nada para cancelar ainda!',
      buttons: ['SAIR']
    });
    alert.present();
  }

  toastEntrar() {
    let toast = this.toastCtrl.create({
      message: 'Usuário ou senha inconrretos, tente novamente!',
      duration: 3000
    });
    toast.present();
  }

  opcoesCadastro() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'O que você deseja fazer?',
      cssClass: 'cadastro',
      buttons: [        
        {
          text: 'Cadastrar - se',
          icon: 'md-person',
          cssClass:'iconCadastrese',
          handler: () => {
            this.cadastrarUsuario()
          }
        },{
          text: 'Cadastrar empresa',
          role: 'destructive',
          icon: 'ios-ribbon',
          cssClass:'iconEmpresa',
          handler: () => {
            this.cadastroEmpresa();
          }
        },
        {
          text: 'Esqueceu a senha?',
          icon: 'md-alert',
          cssClass:'iconEsqueceuSenha',
          handler: () => {
            this.reset_senha()
          }
        },
        {
          text: 'Cancelar cadastro',
          role: 'cancel', // will always sort to be on the bottom
          icon: 'close',
          cssClass: 'iconCancelar',
          handler: () => {
            
          }
        }
      ]
    });
    actionSheet.present();
  }

}
