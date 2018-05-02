import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MoviesComponent} from './movies/movies.component'

const routes:Routes=[
    {path:'', redirectTo: '/home', pathMatch:'full'},
    {path:'home', component:MoviesComponent},
    {path:'extra', loadChildren:'niya/niya.module#NiyaModule'}
]
@NgModule({
    imports: [
      RouterModule.forRoot(routes),
    ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule { }