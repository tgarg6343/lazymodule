import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NiyaRoutingModule } from './niya-routing.module';
import { ExtrrraComponent } from '../app/extrrra/extrrra.component';

@NgModule({
  imports: [
    CommonModule,
    NiyaRoutingModule
  ],
  declarations: [ExtrrraComponent]
})
export class NiyaModule { }
