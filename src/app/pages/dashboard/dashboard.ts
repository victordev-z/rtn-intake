import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { IntakeService } from '../../services/intake';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './dashboard.html'
})
export class DashboardComponent {

  userName: string = '';

  constructor(public intake: IntakeService, private router: Router) {
    const user = localStorage.getItem('user');

    if (!user) {
      this.router.navigate(['/login']);
    } else {
      this.userName = user;
    }
  }
}
