import { NgModule } from '@angular/core';
import { CategoriabuscaPipe } from './categoriabusca/categoriabusca';
import { OfertaPipe } from './oferta/oferta';
import { EmpresabuscaPipe } from './empresabusca/empresabusca';
import { OfertabuscarPipe } from './ofertabuscar/ofertabuscar';
@NgModule({
	declarations: [CategoriabuscaPipe,
    OfertaPipe,
    EmpresabuscaPipe,
    OfertabuscarPipe],
	imports: [],
	exports: [CategoriabuscaPipe,
    OfertaPipe,
    EmpresabuscaPipe,
    OfertabuscarPipe]
})
export class PipesModule {}
