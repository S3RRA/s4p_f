import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent {

  menuItems: any[];
  email: string = localStorage.getItem('email')!
  name: string;

  constructor(private sidebarService: SidebarService, private auth: AuthService) { 
    this.menuItems = this.sidebarService.menu;
    this.name = this.email[0].toUpperCase() + this.email.substring(1, this.email.indexOf('.')).toLowerCase();
  }

  onNavigation(url: any){
    window.open(url, "_blank");
  }

  logout(){
    this.auth.logout();
  }

}
