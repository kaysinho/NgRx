import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalState } from 'src/app/app.reducer';
import { IncomeExpense } from 'src/app/models/income-expenses.model';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  incomes: number = 0;
  expenses: number = 0;
  totalIncomes: number = 0;
  totalExpenses: number = 0;

  // Doughnut
  public doughnutChartLabels: string[] = [
    'Expenses',
    'Incomes',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [0, 0] }
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private store: Store<GlobalState>) {}

  ngOnInit(): void {
    this.store
      .select('incomeExpense')
      .subscribe(({ items }) => this.generate(items));
  }

  generate(items: Array<IncomeExpense>) {
    for (let item of items) {
      if (item.type == 'INCOME') {
        this.incomes++;
        this.totalIncomes = this.totalIncomes + item.value;
      } else {
        this.expenses++;
        this.totalExpenses = this.totalExpenses + item.value;
      }
    }
    this.doughnutChartData.datasets[0].data = [this.totalExpenses, this.totalIncomes]
  }
}
