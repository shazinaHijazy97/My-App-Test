import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToggleComponent } from './toggle/toggle.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
    {path:"", redirectTo:"login", pathMatch:"full"},
    // {path: ' ', component: AppComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'toggle', component: ToggleComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegistrationComponent},
    {path: 'changepassword', component: ForgotPasswordComponent},

];
