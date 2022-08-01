import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, Subscription } from 'rxjs';
import { GlobalState } from '../app.reducer';
import { setItems, unsetItems } from '../income-expenses/income-expense.actions';
import { IncomeExpenseService } from '../services/income-expense.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  change: number = 0;
  userSuscription: Subscription = new Subscription();
  incomeExpenseSuscription: Subscription = new Subscription();

  constructor(private store: Store<GlobalState>, private incomeExpenseService: IncomeExpenseService) { }

  ngOnInit(): void {
    this.userSuscription = this.store.select('user')
      .pipe( filter( auth => auth.user !== null))
      .subscribe( ({ user } : any) => this.getIncomeExpenses(user.uid))
  }

  getIncomeExpenses(uid: string){
    this.incomeExpenseSuscription = this.incomeExpenseService.getIncomesExpenses(uid)
    .subscribe( items => {})
  }

  ngOnDestroy(): void {
    this.userSuscription.unsubscribe()
    this.incomeExpenseSuscription.unsubscribe()
  }



}
