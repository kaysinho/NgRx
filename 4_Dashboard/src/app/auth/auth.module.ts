import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LoginComponent, SigninComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: []
})
export class AuthModule { }
