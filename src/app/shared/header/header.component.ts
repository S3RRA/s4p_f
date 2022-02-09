import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {

  @Input() notifications = [];

  nots: any;
  email: string;

  notificationHeart = false;

  constructor(private auth: AuthService, private router: Router) { 
    let email = localStorage.getItem('email')!;
    this.email = email[0].toUpperCase() + email.substring(1, email.indexOf('.')).toLowerCase();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['notifications'] && changes['notifications'].currentValue) {
      this.nots = Array.from(changes['notifications'].currentValue.notifications);
      this.notificationHeart = true;
    }
  }

  notificationGo(notification: any){
    this.notificationHeart = false;
    for(let not of this.nots){
      if(not.title === notification.title) this.nots.pop(not);
    }
    this.router.navigateByUrl(`/Smart4P/${notification.env}/purposes`)
  }

  logout(){
    this.auth.logout();
  }

}
