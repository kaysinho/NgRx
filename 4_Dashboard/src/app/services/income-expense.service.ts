import { Injectable } from '@angular/core';
import { collection, doc, Firestore, setDoc, where, query, getDocs, deleteDoc } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GlobalState } from '../app.reducer';
import { setItems, unsetItems } from '../income-expenses/income-expense.actions';
import { IncomeExpense } from '../models/income-expenses.model';
import { isLoading, stopLoading } from '../shared/ui.actions';

@Injectable({
  providedIn: 'root',
})
export class IncomeExpenseService {
  constructor(private firestore: Firestore,  private store: Store<GlobalState>) {}

  create(incomeExpense: IncomeExpense) {
    this.store.dispatch(isLoading());
    delete incomeExpense.firestoreId;
    const incomeExpenseRef = doc(collection(this.firestore, 'income-expense'));
    return setDoc(incomeExpenseRef, { ...incomeExpense }).finally(()=> this.store.dispatch(stopLoading()));
  }

  delete(firestoreId: string | undefined) {
    this.store.dispatch(isLoading());
    if (firestoreId == undefined) firestoreId = "";
    return deleteDoc(doc(this.firestore, "income-expense", firestoreId)).finally(()=> this.store.dispatch(stopLoading()));
  }

  getIncomesExpenses(uid: string): Observable<Array<IncomeExpense>>{
    this.store.dispatch(isLoading());

    return new Observable(observer => {
      const incomeExpenseRef = collection(this.firestore, "income-expense")
      const q = query(incomeExpenseRef, where("uid", "==", uid))
      getDocs(q).then( items => {
        
        let incomeExpenses: Array<IncomeExpense> = [];
        items.forEach( doc => {
          let firestoreId : string = doc.id;
          let { description, type, uid, value } = doc.data();
          incomeExpenses.push({ description, value, type, uid, firestoreId })
        })
        this.store.dispatch(unsetItems())
        this.store.dispatch(setItems({ items : incomeExpenses }))
        observer.next(incomeExpenses)
      }).catch( err => observer.error(err)).finally(()=>this.store.dispatch(stopLoading()));

    })
  }
}
