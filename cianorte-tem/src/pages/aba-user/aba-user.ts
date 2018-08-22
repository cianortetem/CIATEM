import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { OfertaPage } from '../oferta/oferta';
import { PerfilUsuarioPage } from '../perfil-usuario/perfil-usuario';
import { EmpresasPage } from '../empresas/empresas';


@Component({
  selector: 'page-aba-user',
  templateUrl: 'aba-user.html',
})
export class AbaUserPage {

  home = HomePage;
  ofertas = OfertaPage;
  perfil = PerfilUsuarioPage;
  empresas = EmpresasPage;

}
