import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';

import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";

@NgModule({
    declarations: [
        AuthComponent,
        LoginComponent,
        SignupComponent,
        LoadingSpinnerComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        AuthRoutingModule
    ],
    exports: [
        AuthComponent,
        LoginComponent,
        SignupComponent,
        LoadingSpinnerComponent
    ]
})
export class AuthModule { }
