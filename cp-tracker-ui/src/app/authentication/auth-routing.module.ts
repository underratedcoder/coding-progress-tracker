import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthComponent } from "./auth/auth.component";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";

const authRoutes: Routes = [
        {
                path: 'auth', component: AuthComponent, children:
                        [
                                { path: '', redirectTo: 'login', pathMatch: 'full' },
                                { path: 'login', component: LoginComponent },
                                { path: 'signup', component: SignupComponent }
                        ]
        }
];

@NgModule({
        imports: [RouterModule.forChild(authRoutes)],
        exports: [RouterModule]
})
export class AuthRoutingModule { }