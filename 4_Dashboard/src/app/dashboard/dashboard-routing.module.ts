import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRoutes } from './dashboard.routes';
import { DashboardComponent } from './dashboard.component';


const routes : Routes = [
  { 
    path: '', 
    component: DashboardComponent,
    children : DashboardRoutes
  }
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
