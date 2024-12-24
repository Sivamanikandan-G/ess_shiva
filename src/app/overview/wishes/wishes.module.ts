import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishesRoutingModule } from './wishes-routing.module';
import { WishesComponent } from './wishes/wishes.component';


@NgModule({
  declarations: [
    WishesComponent
  ],
  imports: [
    CommonModule,
    WishesRoutingModule
  ]
})
export class WishesModule { }
