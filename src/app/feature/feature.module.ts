import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { MessengerComponent } from './messenger/messenger.component';


@NgModule({
  declarations: [
    TaskListComponent,
    MessengerComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
