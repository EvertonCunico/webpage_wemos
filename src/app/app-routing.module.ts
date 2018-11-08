import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeituraComponent } from './leitura/leitura.component';
import { AddLeituraComponent } from './add-leitura/add-leitura.component';

const routes: Routes = [
  { path: 'leituras', component: LeituraComponent },
  { path: 'add', component: AddLeituraComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
