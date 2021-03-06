import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ns-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {
  @Input() title: string;
  @Input() hasChallenge = false;

  constructor(
   private authService: AuthService
  ) {}

    onLogout() {
      this.authService.logout();
    }


  ngOnInit() {}


}
