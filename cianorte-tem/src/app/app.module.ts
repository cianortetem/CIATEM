import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Img } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonMaskModule } from '@pluritech/ion-mask';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { DatePipe } from '@angular/common';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';


// ¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬ firebase ¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

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
import { LoginusuariosPage } from '../pages/auth/loginusuarios/loginusuarios';
//import { CadusuariosPage } from '../pages/auth/cadusuarios/cadusuarios';
import { EmpresadetalhesPage } from '../pages/empresadetalhes/empresadetalhes';
import { RotasPage } from '../pages/rotas/rotas';
import { MapaPage } from '../pages/mapa/mapa';
import { OfertadetalhesPage } from '../pages/ofertadetalhes/ofertadetalhes';
import { PerfilUsuarioPage } from '../pages/perfil-usuario/perfil-usuario';
import { PerfilEmpresaPage } from '../pages/perfil-empresa/perfil-empresa';
import { AbaUserPage } from '../pages/aba-user/aba-user';
// ¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬ providers ¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
import { CategoriaProvider } from '../providers/categoria/categoria';
import { EmpresaProvider } from '../providers/empresa/empresa';
import { OfertaProvider } from '../providers/oferta/oferta';
// import { FotosProvider } from '../providers/fotos/fotos';
import { AuthProvider } from '../providers/auth/auth.1';
import { UsuarioPerfilProvider } from '../providers/usuario-perfil/usuario-perfil';
// ¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬ pipes ¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
import { CategoriabuscaPipe } from '../pipes/categoriabusca/categoriabusca';
import { OfertaPipe } from '../pipes/oferta/oferta';
import { EmpresabuscaPipe } from '../pipes/empresabusca/empresabusca';
import { OfertabuscarPipe } from '../pipes/ofertabuscar/ofertabuscar';
import { EmpresaPerfilProvider } from '../providers/empresa-perfil/empresa-perfil';
import { AbaAdminPage } from '../pages/aba-admin/aba-admin';
import { AbaEmpresaPage } from '../pages/aba-empresa/aba-empresa';

@NgModule({
  declarations: [
    cianortetem,
    CadastrarusuarioPage,
    CategoriasPage,
    CategoriacadastrarPage,
    EmpresasPage,
    EmpresacadastrarPage,
    EmpresadetalhesPage,
    FotosPage,
    HomePage, 
    LoginPage,
    LoginusuariosPage,
    ResetsenhaPage,
    OfertaPage,
    OfertacadastrarPage,
    CategoriabuscaPipe,
    OfertaPipe,
    OfertabuscarPipe,
    EmpresabuscaPipe, 
    RotasPage,
    MapaPage,
    OfertadetalhesPage,
    PerfilUsuarioPage,
    PerfilEmpresaPage,
    AbaUserPage,
    AbaEmpresaPage,
    AbaAdminPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(cianortetem),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    IonMaskModule.forRoot(),
    IonicStorageModule.forRoot(),
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
    EmpresadetalhesPage,
    LoginPage,
    OfertaPage,
    OfertacadastrarPage,
    ResetsenhaPage,
    FotosPage,
    LoginusuariosPage,
    RotasPage,
    MapaPage,
    OfertadetalhesPage,
    PerfilUsuarioPage,
    PerfilEmpresaPage,
    AbaUserPage,
    AbaEmpresaPage,
    AbaAdminPage
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
      // FotosProvider,
      Camera,
      AuthProvider,
      ImagePicker,
      DatePipe,
      AngularFireDatabase,
      Geolocation,
      UsuarioPerfilProvider,
      EmpresaPerfilProvider
      //Facebook
  ]
})
export class AppModule {}
