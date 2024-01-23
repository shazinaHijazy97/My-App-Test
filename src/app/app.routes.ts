import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToggleComponent } from './toggle/toggle.component';

export const routes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'toggle', component: ToggleComponent},
];
