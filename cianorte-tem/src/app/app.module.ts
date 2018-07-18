import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Img } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonMaskModule } from '@pluritech/ion-mask';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { DatePipe } from '@angular/common';
import { IonicStorageModule } from '@ionic/storage';
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
import { cianortetem } from './app.component';
import { CadastrarusuarioPage } from '../pages/cadastrarusuario/cadastrarusuario';
import { CategoriasPage } from '../pages/categorias/categorias';
import { CategoriacadastrarPage } from '../pages/categoriacadastrar/categoriacadastrar';
import { EmpresasPage } from '../pages/empresas/empresas';
import { EmpresacadastrarPage } from '../pages/empresacadastrar/empresacadastrar';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ResetsenhaPage } from '../pages/resetsenha/resetsenha';
import { OfertaPage } from '../pages/oferta/oferta';
import { OfertacadastrarPage } from '../pages/ofertacadastrar/ofertacadastrar';
import { FotosPage } from '../pages/fotos/fotos';

// ¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬ providers ¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
import { CategoriaProvider } from '../providers/categoria/categoria';
import { EmpresaProvider } from '../providers/empresa/empresa';
import { OfertaProvider } from '../providers/oferta/oferta';
import { FotosProvider } from '../providers/fotos/fotos';

// ¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬ pipes ¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
import { CategoriabuscaPipe } from '../pipes/categoriabusca/categoriabusca';
import { OfertaPipe } from '../pipes/oferta/oferta';
import { EmpresaPipe } from '../pipes/empresa/empresa';
import { AuthProvider } from '../providers/auth/auth';


@NgModule({
  declarations: [
    cianortetem,
    CadastrarusuarioPage,
    CategoriasPage,
    CategoriacadastrarPage,
    HomePage,
    EmpresasPage,
    EmpresacadastrarPage,
    LoginPage,
    ResetsenhaPage,
    OfertaPage,
    OfertacadastrarPage,
    CategoriabuscaPipe,
    OfertaPipe,
    EmpresaPipe,
    FotosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(cianortetem),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    IonMaskModule.forRoot(),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    cianortetem,
    CadastrarusuarioPage,
    CategoriasPage,
    CategoriacadastrarPage,
    HomePage,
    EmpresasPage,
    EmpresacadastrarPage,
    LoginPage,
    OfertaPage,
    OfertacadastrarPage,
    ResetsenhaPage,
    FotosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler},
      CategoriaProvider,
      EmpresaProvider,
      OfertaProvider,
      FotosProvider,
      Camera,
      AuthProvider,
      ImagePicker,
      DatePipe
  ]
})
export class AppModule {}
