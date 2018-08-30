import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Loading, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { CategoriasPage } from '../pages/categorias/categorias';
import { CategoriacadastrarPage } from '../pages/categoriacadastrar/categoriacadastrar';
import { HomePage } from '../pages/home/home';
import { EmpresasPage } from '../pages/empresas/empresas';
import { LoginPage } from '../pages/login/login';
import { ResetsenhaPage } from '../pages/resetsenha/resetsenha';
import { OfertaPage } from '../pages/oferta/oferta';
import { OfertacadastrarPage } from '../pages/ofertacadastrar/ofertacadastrar';
import { FotosPage } from '../pages/fotos/fotos';
import { LoginusuariosPage } from '../pages/auth/loginusuarios/loginusuarios';
import { EmpresadetalhesPage } from '../pages/empresadetalhes/empresadetalhes';
import { RotasPage } from '../pages/rotas/rotas';
import { MapaPage } from '../pages/mapa/mapa';
import { EmpresacadastrarPage } from '../pages/empresacadastrar/empresacadastrar';
import { CadastrarusuarioPage } from '../pages/cadastrarusuario/cadastrarusuario';
import { PerfilUsuarioPage } from '../pages/perfil-usuario/perfil-usuario';
import { PerfilEmpresaPage } from '../pages/perfil-empresa/perfil-empresa';
import { AbaUserPage } from '../pages/aba-user/aba-user';
import { AbaEmpresaPage } from '../pages/aba-empresa/aba-empresa';
import { AbaAdminPage } from '../pages/aba-admin/aba-admin';

import { AngularFireAuth } from 'angularfire2/auth'
import firebase from 'firebase';
import { AdminPage } from '../pages/admin/admin';
import { AdminOfertasPage } from '../pages/admin-ofertas/admin-ofertas';

@Component({
  templateUrl: 'app.html'
})
export class cianortetem {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = OfertacadastrarPage;
  fireAuth: any;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public af: AngularFireAuth,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public loading: LoadingController) {
      this.fireAuth = firebase.auth();

      this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Ofertas', component: OfertaPage },
      { title: 'Fotos', component: FotosPage },
      { title: 'Sair', component: LoginPage},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {

      //eu que criei esse metodo
        // this.getInitializePageLoad().then((page) =>{
        //   this.rootPage = page;
        // })

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.show();
    });
  }

  // getInitializePageLoad(){
  //   let loading = this.loading.create({
  //     content: 'Buscando login...'
  //   });loading.present();

  //   return new Promise((resolve, reject)=>{
  //     this.af.authState.take(1).subscribe(data =>{
  //       if(data && data.email &&data.uid){
  //         loading.dismiss();
  //         resolve('HomePage');
  //       }else{
  //         loading.dismiss();
  //         resolve('LoginPage');
  //       }
  //     })
  //   })
  // }
  

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  sair(){
    this.nav.setRoot(LoginusuariosPage);
  }
}
