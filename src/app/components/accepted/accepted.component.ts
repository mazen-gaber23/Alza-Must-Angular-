import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accepted',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './accepted.component.html',
  styleUrl: './accepted.component.scss'
})
export class AcceptedComponent {
  private readonly _Router =inject(Router)
  policyAccepted: boolean = false;
  cookiesAccepted: boolean = false;
  acceptCookies() {
    if (!this.policyAccepted ||!this.cookiesAccepted) {
      alert('You must accept all conditions');
    } else {
      this._Router.navigate(['/home']);
    }
  }
}
