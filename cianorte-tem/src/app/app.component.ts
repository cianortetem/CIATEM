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
import { OfertaPage } from '../pages/oferta/oferta';
import { OfertacadastrarPage } from '../pages/ofertacadastrar/ofertacadastrar';
import { FotosPage } from '../pages/fotos/fotos';
import { LoginusuariosPage } from '../pages/auth/loginusuarios/loginusuarios';
import { CadusuariosPage } from '../pages/auth/cadusuarios/cadusuarios';
import { EmpresadetalhesPage } from '../pages/empresadetalhes/empresadetalhes';
import { RotasPage } from '../pages/rotas/rotas';
import { MapaPage } from '../pages/mapa/mapa';
import { EmpresacadastrarPage } from '../pages/empresacadastrar/empresacadastrar';
import { CadastrarusuarioPage } from '../pages/cadastrarusuario/cadastrarusuario';
import { PerfilUsuarioPage } from '../pages/perfil-usuario/perfil-usuario';
import { PerfilEmpresaPage } from '../pages/perfil-empresa/perfil-empresa';

@Component({
  templateUrl: 'app.html'
})
export class cianortetem {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = EmpresacadastrarPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
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
    this.nav.setRoot(LoginusuariosPage);
  }
}
