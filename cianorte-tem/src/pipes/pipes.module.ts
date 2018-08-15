import { NgModule } from '@angular/core';
import { CategoriabuscaPipe } from './categoriabusca/categoriabusca';
import { OfertaPipe } from './oferta/oferta';
import { Empresa_pipe_Pipe } from './empresa_pipe_/empresa_pipe_';
import { EmpresabuscaPipe } from './empresabusca/empresabusca';
@NgModule({
	declarations: [CategoriabuscaPipe,
    OfertaPipe,
    Empresa_pipe_Pipe,
    EmpresabuscaPipe],
	imports: [],
	exports: [CategoriabuscaPipe,
    OfertaPipe,
    Empresa_pipe_Pipe,
    EmpresabuscaPipe]
})
export class PipesModule {}
