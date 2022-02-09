import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Smart4PService } from 'src/app/services/s4p.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-api-view',
  templateUrl: './api-view.component.html',
  styles: [
  ]
})
export class ApiViewComponent implements OnInit {

   //Essential data
   api: any;
   id: any;
   secdef: any;
   env: any;
 
   //Breadcrumb
   where: any;
 
   //Exceldata
   apps: any;
   piscopes: any;
   apis: any;
   purposes: any;
 
   //Displays
   iconScopes = 'mdi mdi-plus-circle-outline';
   iconSec = 'mdi mdi-plus-circle-outline';
   iconPaths = 'mdi mdi-plus-circle-outline';
   iconSc = 'mdi mdi-plus-circle-outline';
   iconPath = [];
   iconUrl = [];
   iconResponses = [];
   iconResponse = [];
   iconParameters = [];
 
   Toast = Swal.mixin({
     toast: true,
     position: 'top-end',
     showConfirmButton: false,
     timer: 1500,
     timerProgressBar: true,
     didOpen: (toast: any) => {
       toast.addEventListener('mouseenter', Swal.stopTimer);
       toast.addEventListener('mouseleave', Swal.resumeTimer);
     },
   });

   constructor(
    private activatedRoute: ActivatedRoute,
    private smart4P: Smart4PService
  ) {
    Swal.fire({
      allowOutsideClick: false,
      title: 'Loading...',
      text: 'Please wait',
    });
    Swal.showLoading();
    this.activatedRoute.params.subscribe((p: any) => {
      this.id = p['id'];
      this.env = p['env'];
      this.where = [this.env, 'Apis', this.id];
      this.smart4P.getData(this.env, 'apis').subscribe(
        (r:any) => {
          let apis = r.apis;
          for(let api of apis){
            if(api.id === this.id){
              this.api = api;
              this.secdef = api['swagger']['securityDefinitions'];
            }
          }
          Swal.close();
          Swal.close();
        },
        e => {
          Swal.close();
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'There has been a problem loading data, please retry',
            footer: 'If the error persists please notify support',
            showConfirmButton: false,
            timer: 3500,
          });
        }
      );
    });  

   // this.displayicons();

  }

  ngOnInit(): void {
  }
/*
  displayicons(){
    this.iconPath.length = 500;
    this.iconPath.fill('mdi mdi-plus-circle-outline');
    this.iconUrl.length = 500;
    this.iconUrl.fill('mdi mdi-plus-circle-outline');
    this.iconResponses.length = 500;
    this.iconResponses.fill('mdi mdi-plus-circle-outline');
    this.iconParameters.length = 500;
    this.iconParameters.fill('mdi mdi-plus-circle-outline');
    this.iconResponse.length = 500;
    this.iconResponse.fill('mdi mdi-plus-circle-outline');
  }

  displaySco() {
    if (this.iconScopes === 'mdi mdi-plus-circle-outline') {
      this.iconScopes = 'mdi mdi-minus-circle-outline';
    } else if (this.iconScopes === 'mdi mdi-minus-circle-outline') {
      this.iconScopes = 'mdi mdi-plus-circle-outline';
    }
  }

  displaySec() {
    if (this.iconSec === 'mdi mdi-plus-circle-outline') {
      this.iconSec = 'mdi mdi-minus-circle-outline';
    } else if (this.iconSec === 'mdi mdi-minus-circle-outline') {
      this.iconSec = 'mdi mdi-plus-circle-outline';
    }
  }

  displaySc() {
    if (this.iconSc === 'mdi mdi-plus-circle-outline') {
      this.iconSc = 'mdi mdi-minus-circle-outline';
    } else if (this.iconSc === 'mdi mdi-minus-circle-outline') {
      this.iconSc = 'mdi mdi-plus-circle-outline';
    }
  }

  displayPaths() {
    if (this.iconPaths === 'mdi mdi-plus-circle-outline') {
      this.iconPaths = 'mdi mdi-minus-circle-outline';
    } else if (this.iconPaths === 'mdi mdi-minus-circle-outline') {
      this.iconPaths = 'mdi mdi-plus-circle-outline';
    }
  }

  displayPath(position: number) {
    if (this.iconPath[position] === 'mdi mdi-plus-circle-outline') {
      this.iconPath[position] = 'mdi mdi-minus-circle-outline';
    } else if (this.iconPath[position] === 'mdi mdi-minus-circle-outline') {
      this.iconPath[position] = 'mdi mdi-plus-circle-outline';
    }
  }

  displayMethod(position: number) {
    if (this.iconUrl[position] === 'mdi mdi-plus-circle-outline') {
      this.iconUrl[position] = 'mdi mdi-minus-circle-outline';
    } else if (this.iconUrl[position] === 'mdi mdi-minus-circle-outline') {
      this.iconUrl[position] = 'mdi mdi-plus-circle-outline';
    }
  }

  displayResponses(position: number) {
    if (this.iconResponses[position] === 'mdi mdi-plus-circle-outline') {
      this.iconResponses[position] = 'mdi mdi-minus-circle-outline';
    } else if (
      this.iconResponses[position] === 'mdi mdi-minus-circle-outline'
    ) {
      this.iconResponses[position] = 'mdi mdi-plus-circle-outline';
    }
  }

  displayResponse(position: number){
    if (this.iconResponse[position] === 'mdi mdi-plus-circle-outline') {
      this.iconResponse[position] = 'mdi mdi-minus-circle-outline';
    } else if (
      this.iconResponse[position] === 'mdi mdi-minus-circle-outline'
    ) {
      this.iconResponse[position] = 'mdi mdi-plus-circle-outline';
    }
  }

  displayParameters(position: number) {
    if (this.iconResponses[position] === 'mdi mdi-plus-circle-outline') {
      this.iconResponses[position] = 'mdi mdi-minus-circle-outline';
    } else if (
      this.iconResponses[position] === 'mdi mdi-minus-circle-outline'
    ) {
      this.iconResponses[position] = 'mdi mdi-plus-circle-outline';
    }
  }
*/
}
