import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { MessengerComponent } from './messenger/messenger.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'task-list'},
  {path:'task-list', component: TaskListComponent},
  {path:'messenger', component: MessengerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
