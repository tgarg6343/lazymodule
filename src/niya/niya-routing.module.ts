import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExtrrraComponent} from './../app/extrrra/extrrra.component'
const routes: Routes = [
  {path:'', component:ExtrrraComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NiyaRoutingModule { }
