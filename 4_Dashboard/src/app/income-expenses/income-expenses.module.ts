import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeExpenseOrderPipe } from '../pipes/income-expense-order.pipe';
import { DetailComponent } from './detail/detail.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { IncomeExpensesComponent } from './income-expenses.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';
import { StoreModule } from '@ngrx/store';
import { incomeExpenseReducer } from './income-expense.reducer';

@NgModule({
  declarations: [
    DashboardComponent,
    IncomeExpensesComponent,
    StatisticsComponent,
    DetailComponent,
    IncomeExpenseOrderPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgChartsModule,
    SharedModule,
    DashboardRoutingModule
  ],
})
export class IncomeExpensesModule {}
