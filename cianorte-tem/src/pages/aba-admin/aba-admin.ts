import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { OfertaPage } from '../oferta/oferta';
import { OfertacadastrarPage } from '../ofertacadastrar/ofertacadastrar';
import { PerfilEmpresaPage } from '../perfil-empresa/perfil-empresa';
import { EmpresasPage } from '../empresas/empresas';

@Component({
  selector: 'page-aba-admin',
  templateUrl: 'aba-admin.html',
})
export class AbaAdminPage {
  home      = HomePage;
  empresas  = EmpresasPage;
  ofertas   = OfertaPage;
  ofertaAdd = OfertacadastrarPage;
  perfil    = PerfilEmpresaPage;
}

