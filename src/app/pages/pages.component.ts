import { Component, OnInit } from '@angular/core';
import { Smart4PService } from '../services/s4p.service';
import { SettingsService } from '../services/settings.service';

declare function customInitFunctions(): any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: []
})
export class PagesComponent implements OnInit {

  notifications: any;

  constructor(private settings: SettingsService, private smart4p: Smart4PService) { 
    this.settings.checkCurrentTheme();
    this.smart4p.getNotifications().subscribe( 
      (r:any) =>{
        this.notifications = r;
      }
    );
  }

  ngOnInit(): void {
    customInitFunctions();
  }

  date = new Date();
  year = this.date.getFullYear();

}
