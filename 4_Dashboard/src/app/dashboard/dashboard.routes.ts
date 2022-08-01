import { RouterModule, Routes } from "@angular/router";
import { DetailComponent } from "../income-expenses/detail/detail.component";
import { IncomeExpensesComponent } from "../income-expenses/income-expenses.component";
import { StatisticsComponent } from "../income-expenses/statistics/statistics.component";

export const DashboardRoutes: Routes = [
    { path: '', component: StatisticsComponent},
    { path: 'incomes-expenses', component: IncomeExpensesComponent},
    { path: 'detail', component: DetailComponent}
];