import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SigninComponent } from './auth/signin/signin.component';

import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'auth', component: LoginComponent},
  { path: 'signin', component: SigninComponent},
  { path: '', canLoad: [ AuthGuard ], loadChildren: ()=> import('./income-expenses/income-expenses.module').then( m=> m.IncomeExpensesModule)},
  {path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
