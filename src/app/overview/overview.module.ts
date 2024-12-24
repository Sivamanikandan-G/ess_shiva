import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { ProfileComponent } from './profile/profile.component';
import { CoreModule } from '../core/core.module';
import { CalendarComponent } from './calendar/calendar.component';
import { WishesComponent } from './wishes/wishes/wishes.component';

@NgModule({
  declarations: [
    OverviewComponent,
    ProfileComponent,
    CalendarComponent,
    WishesComponent
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    CoreModule
  ]
})
export class OverviewModule { }
