import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ToggleComponent } from "./toggle/toggle.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, ToggleComponent]
})
export class AppComponent {
  title = 'my-app-test';
}
