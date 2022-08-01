import { Pipe, PipeTransform } from '@angular/core';
import { IncomeExpense } from '../models/income-expenses.model';

@Pipe({
  name: 'incomeExpenseOrder'
})
export class IncomeExpenseOrderPipe implements PipeTransform {

  transform(incomesExpenses: Array<IncomeExpense>): Array<IncomeExpense>{
    if (incomesExpenses.length==0) return incomesExpenses;
    
    return incomesExpenses.slice().sort((item)=>{
      if (item.type === 'INCOME') {
        return -1
      } else {
        return 1;
      }
    });
  }

}
