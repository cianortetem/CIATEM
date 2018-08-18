import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriasModalPage } from './categorias-modal';

@NgModule({
  declarations: [
    CategoriasModalPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoriasModalPage),
  ],
})
export class CategoriasModalPageModule {}
