import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishesRoutingModule } from './wishes-routing.module';
import { WishesComponent } from './wishes/wishes.component';
import { BirthdayComponent } from './birthday/birthday.component';


@NgModule({
  declarations: [
    WishesComponent,
    BirthdayComponent
  ],
  imports: [
    CommonModule,
    WishesRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WishesModule { }
