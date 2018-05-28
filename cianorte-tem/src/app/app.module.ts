import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// ¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬ firebase ¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

const firebaseConfig = {
      apiKey: "AIzaSyC6Sur7_cm6iWJhUKXbGLpqGnfPKxIVppA",
      authDomain: "cianorte-temapp.firebaseapp.com",
      databaseURL: "https://cianorte-temapp.firebaseio.com",
      projectId: "cianorte-temapp",
      storageBucket: "cianorte-temapp.appspot.com",
      messagingSenderId: "33292307332"
    };
// ¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬ pages  ¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
import { MyApp } from './app.component';
import { CadastrarusuarioPage } from '../pages/cadastrarusuario/cadastrarusuario';
import { CategoriasPage } from '../pages/categorias/categorias';
import { CategoriacadastrarPage } from '../pages/categoriacadastrar/categoriacadastrar';
import { EmpresasPage } from '../pages/empresas/empresas';
import { EmpresacadastrarPage } from '../pages/empresacadastrar/empresacadastrar';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ResetsenhaPage } from '../pages/resetsenha/resetsenha';
// ¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬ providers ¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
import { CategoriaProvider } from '../providers/categoria/categoria';
import { EmpresaProvider } from '../providers/empresa/empresa';
// ¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬ pipes ¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
import { CategoriabuscaPipe } from '../pipes/categoriabusca/categoriabusca';


@NgModule({
  declarations: [
    MyApp,
    CadastrarusuarioPage,
    CategoriasPage,
    CategoriacadastrarPage,
    HomePage,
    EmpresasPage,
    EmpresacadastrarPage,
    LoginPage,
    ResetsenhaPage,
    CategoriabuscaPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CadastrarusuarioPage,
    CategoriasPage,
    CategoriacadastrarPage,
    HomePage,
    EmpresasPage,
    EmpresacadastrarPage,
    LoginPage,
    ResetsenhaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler},
      CategoriaProvider,
      EmpresaProvider
  ]
})
export class AppModule {}
