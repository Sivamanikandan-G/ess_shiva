import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { ProfileComponent } from './profile/profile.component';
import { CoreModule } from '../core/core.module';
import { CalendarComponent } from './calendar/calendar.component';
import { WishesComponent } from './wishes/wishes/wishes.component';
import { BirthdayComponent } from './wishes/birthday/birthday.component';

@NgModule({
  declarations: [
    OverviewComponent,
    ProfileComponent,
    CalendarComponent,
    WishesComponent,
    BirthdayComponent
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    CoreModule
  ],
  exports: [
    OverviewComponent,
    ProfileComponent,
    CalendarComponent,
    WishesComponent,
    BirthdayComponent
  ]
})
export class OverviewModule { }
