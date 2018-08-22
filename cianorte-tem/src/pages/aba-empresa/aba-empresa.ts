import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilEmpresaPage } from '../perfil-empresa/perfil-empresa';
import { OfertacadastrarPage } from '../ofertacadastrar/ofertacadastrar';
import { OfertaPage } from '../oferta/oferta';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-aba-empresa',
  templateUrl: 'aba-empresa.html',
})
export class AbaEmpresaPage {
  home = HomePage;
  ofertas = OfertaPage;
  perfil = PerfilEmpresaPage;
  ofertaAdd = OfertacadastrarPage;
}
