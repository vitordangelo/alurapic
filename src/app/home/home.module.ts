import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { VmessageModule } from '../shared/component/vmessage/vmessage.module';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    VmessageModule,
    RouterModule
  ],
  declarations: [
    SigninComponent,
    SignupComponent
  ]
})
export class HomeModule { }
