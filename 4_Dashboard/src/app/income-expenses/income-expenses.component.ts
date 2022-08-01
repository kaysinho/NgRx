import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IncomeExpense } from '../models/income-expenses.model';
import { AuthService } from '../services/auth.service';
import { IncomeExpenseService } from '../services/income-expense.service';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-income-expenses',
  templateUrl: './income-expenses.component.html',
  styleUrls: ['./income-expenses.component.scss']
})
export class IncomeExpensesComponent implements OnInit {
  incomeForm : FormGroup = new FormGroup({
    description: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(200)])),
    value: new FormControl(0, Validators.compose([Validators.required, Validators.min(1)])),
  });
  type: string = "EXPENSE";
  constructor(private incomeExpenseServive: IncomeExpenseService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  save(){
    if (this.incomeForm.invalid) return;
    const { description, value } = this.incomeForm.value
    const incomeExpense : IncomeExpense = new IncomeExpense(description, value, this.type, this.authService.user.uid);
    this.incomeExpenseServive.create(incomeExpense).then( data => {
      Notiflix.Notify.success('Record saved');
      this.incomeExpenseServive.getIncomesExpenses(this.authService.user.uid).subscribe( () => {})
      this.incomeForm.reset();
    }).catch( err => Notiflix.Notify.warning(err.message))
  }

  cancel(){
    this.incomeForm.reset();
  }

}
