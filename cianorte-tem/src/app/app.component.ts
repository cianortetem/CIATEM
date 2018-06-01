import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { CategoriasPage } from '../pages/categorias/categorias';
import { CategoriacadastrarPage } from '../pages/categoriacadastrar/categoriacadastrar';
import { HomePage } from '../pages/home/home';
import { EmpresasPage } from '../pages/empresas/empresas';
import { LoginPage } from '../pages/login/login';
import { ResetsenhaPage } from '../pages/resetsenha/resetsenha';
<<<<<<< HEAD
import { OfertaPage } from '../pages/oferta/oferta';
=======
>>>>>>> d9889830ca63872d343338ed3f9d5371054c5a68
import { OfertacadastrarPage } from '../pages/ofertacadastrar/ofertacadastrar';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Categorias', component: CategoriasPage },
      { title: 'Empresas', component: EmpresasPage },
<<<<<<< HEAD
      { title: 'Ofertas', component: OfertaPage },
=======
      { title: 'Ofertas', component: OfertacadastrarPage },
>>>>>>> d9889830ca63872d343338ed3f9d5371054c5a68
      { title: 'Sair', component: LoginPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  sair(){
    this.nav.setRoot(LoginPage);
  }
}
