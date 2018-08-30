import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminOfertasPage } from './admin-ofertas';

@NgModule({
  declarations: [
    AdminOfertasPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminOfertasPage),
  ],
})
export class AdminOfertasPageModule {}
