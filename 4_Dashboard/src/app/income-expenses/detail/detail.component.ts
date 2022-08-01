import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, Subscription } from 'rxjs';
import { GlobalState } from 'src/app/app.reducer';
import { IncomeExpense } from 'src/app/models/income-expenses.model';
import { IncomeExpenseService } from 'src/app/services/income-expense.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {
  incomesExpenses: Array<IncomeExpense> = [];
  incomesExpensesSubscription : Subscription = new Subscription();
  incomeExpenseSuscription: Subscription = new Subscription();
  userId: string = ""
  userSuscription: Subscription = new Subscription();

  constructor(private store:Store<GlobalState>, private incomeExpenseService: IncomeExpenseService) { }

  ngOnInit(): void {
    this.userSuscription = this.store.select('user')
    .pipe( filter( auth => auth.user !== null))
    .subscribe( ({ user } : any) => {
      this.userId = user.uid;
      this.getIncomeExpenses(user.uid);
    })
  }

  getIncomeExpenses(uid: string){
    this.incomeExpenseSuscription = this.incomeExpenseService.getIncomesExpenses(uid)
    .subscribe( items => {
      this.incomesExpensesSubscription = this.store.select('incomeExpense').subscribe( ({ items } ) =>{
        this.incomesExpenses = items;
      })
    })
  }

  remove(firestoreId:string | undefined){
    this.incomeExpenseService.delete(firestoreId)
      .then((data)=> this.getIncomeExpenses(this.userId))
  }

  ngOnDestroy(): void {
    this.incomesExpensesSubscription.unsubscribe();
  }

}
