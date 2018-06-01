import { NgModule } from '@angular/core';
import { CategoriabuscaPipe } from './categoriabusca/categoriabusca';
import { OfertaPipe } from './oferta/oferta';
import { EmpresaPipe } from './empresa/empresa';
@NgModule({
	declarations: [CategoriabuscaPipe,
    OfertaPipe,
    EmpresaPipe],
	imports: [],
	exports: [CategoriabuscaPipe,
    OfertaPipe,
    EmpresaPipe]
})
export class PipesModule {}
