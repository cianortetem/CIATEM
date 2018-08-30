import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, ToastController, NavParams, Platform, ActionSheetController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ResetsenhaPage } from '../resetsenha/resetsenha';
import { CadastrarusuarioPage } from '../cadastrarusuario/cadastrarusuario';
import { User } from "../../models/users";
import { AngularFireAuth} from "angularfire2/auth";
import { LoginusuariosPage } from '../auth/loginusuarios/loginusuarios';
import { EmpresacadastrarPage } from '../empresacadastrar/empresacadastrar';
import { PerfilUsuarioPage } from '../perfil-usuario/perfil-usuario';
import { AbaUserPage } from '../aba-user/aba-user';
import { AbaAdminPage } from '../aba-admin/aba-admin';
import { AbaEmpresaPage } from '../aba-empresa/aba-empresa';
import { UsuarioPerfilProvider } from '../../providers/usuario-perfil/usuario-perfil';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
  userProfile: Observable<any>;

  constructor(
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,    
    private provider: UsuarioPerfilProvider,
    public toastCtrl: ToastController,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController) { 
      this.userProfile = this.provider.getAll();
    }

  fazerLogin(user: User) {
    try{
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if(result){
        this.navCtrl.setRoot(AbaUserPage, {usuario: user});
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

  // pegaIDuser(uid){
  //   return new Promise((resolve, reject) =>{
  //     var userRef = this.userProfile.child(uid);
  //     this.user.once("value", function(snap){
  //       var user = snap.val();
  //       resolve(user);
  //     },function(error){
  //       reject(error);
  //     })
  //   })
  // }
  

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
