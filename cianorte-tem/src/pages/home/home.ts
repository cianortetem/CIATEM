import { CategoriaProvider } from './../../providers/categoria/categoria';
import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { LoginPage } from '../login/login';
import { CategoriasPage } from '../categorias/categorias';
import { CategoriacadastrarPage } from '../categoriacadastrar/categoriacadastrar';
import { EmpresacadastrarPage } from '../empresacadastrar/empresacadastrar';
import { EmpresadetalhesPage } from '../empresadetalhes/empresadetalhes';
import { EmpresasPage } from '../empresas/empresas';
import { OfertaPage } from '../oferta/oferta';
import { PerfilUsuarioPage } from '../perfil-usuario/perfil-usuario';
import { UsuarioPerfilProvider } from '../../providers/usuario-perfil/usuario-perfil';
import { PerfilEmpresaPage } from '../perfil-empresa/perfil-empresa';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usuario : any;
  public obj: any;
  public result: any;

  categorias: Observable<any>;

  constructor(
  	public navCtrl: NavController,
    private provider: CategoriaProvider,
    private provider2: UsuarioPerfilProvider,
    public navParams: NavParams,
  	private toast: ToastController) {
      this.usuario = this.navParams.get('usuario');
    // lista todas as categorias
    this.categorias = this.provider.getAll();
    }
    // 
    novaCategoria(){
      this.navCtrl.push(CategoriacadastrarPage);
    }
    
    editaCategoria(categoria: any){
      this.navCtrl.push(CategoriacadastrarPage, { categoria: categoria });
    }

    removeCategoria(key: string){
      this.provider.remove(key)
      .then(() => {
        this.toast.create({ message: 'Categoria removida!', duration: 3000 }).present();
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao excluir categoria!', duration: 3000 }).present();
      })
    }

    loginPage(){
    this.navCtrl.parent.parent.setRoot(LoginPage);
  }

  empresasPage(){
    this.navCtrl.push(EmpresasPage);
  }
  ofertasPage(){
    this.navCtrl.push(OfertaPage);
  }
  
  perfilPage(usuario: any){
    this.navCtrl.push(PerfilUsuarioPage, {dadosUsuario: usuario});
  }
  perfilEmpresaPage(){
    this.navCtrl.push(PerfilEmpresaPage);
  }

  }

