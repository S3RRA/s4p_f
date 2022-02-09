import { Component, OnInit } from '@angular/core';

import { ClientModel } from './../../../models/client.module';
import { NgForm } from '@angular/forms';
import { Smart4PService } from 'src/app/services/s4p.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styles: [
  ]
})
export class UserprofileComponent {

  client: ClientModel = new ClientModel();

  v2: any;
  v3: any;

  display = false;

  landlines: any;
  mobilelines: any;
  iptvs: any;

  constructor( private smart4p :Smart4PService) {}

  where = ['User profile'];

  identitiesbtn = 'mdi mdi-plus-circle-outline';
  documentbtn = 'mdi mdi-plus-circle-outline';
  jsonbtn = 'mdi mdi-plus-circle-outline';
  identitiesbtn2 = 'mdi mdi-plus-circle-outline';
  documentbtn2 = 'mdi mdi-plus-circle-outline';
  jsonbtn2 = 'mdi mdi-plus-circle-outline';


  onSubmit(form: NgForm){

    if ( form.invalid ) return;

    this.smart4p.getTestClient( 3, this.client.identityId, this.client.identityType ).subscribe(
      (r:any) => {
        console.log(r);
        this.v3 = r[0];
        this.display = true;
      },
      (e: any) => {
        console.log(e);
      }
    );

  }

  displaybtn(){
    if (this.identitiesbtn === 'mdi mdi-plus-circle-outline') {
      this.identitiesbtn = 'mdi mdi-minus-circle-outline';
    } else if (this.identitiesbtn === 'mdi mdi-minus-circle-outline') {
      this.identitiesbtn = 'mdi mdi-plus-circle-outline';
    }
  }

  displaydocument(){
    if (this.documentbtn === 'mdi mdi-plus-circle-outline') {
      this.documentbtn = 'mdi mdi-minus-circle-outline';
    } else if (this.documentbtn === 'mdi mdi-minus-circle-outline') {
      this.documentbtn = 'mdi mdi-plus-circle-outline';
    }
  }

  displayjson(){
    if (this.jsonbtn === 'mdi mdi-plus-circle-outline') {
      this.jsonbtn = 'mdi mdi-minus-circle-outline';
    } else if (this.jsonbtn === 'mdi mdi-minus-circle-outline') {
      this.jsonbtn = 'mdi mdi-plus-circle-outline';
    }
  }

  displaybtn2(){
    if (this.identitiesbtn2 === 'mdi mdi-plus-circle-outline') {
      this.identitiesbtn2 = 'mdi mdi-minus-circle-outline';
    } else if (this.identitiesbtn2 === 'mdi mdi-minus-circle-outline') {
      this.identitiesbtn2 = 'mdi mdi-plus-circle-outline';
    }
  }

  displaydocument2(){
    if (this.documentbtn2 === 'mdi mdi-plus-circle-outline') {
      this.documentbtn2 = 'mdi mdi-minus-circle-outline';
    } else if (this.documentbtn2 === 'mdi mdi-minus-circle-outline') {
      this.documentbtn2 = 'mdi mdi-plus-circle-outline';
    }
  }

  displayjson2(){
    if (this.jsonbtn2 === 'mdi mdi-plus-circle-outline') {
      this.jsonbtn2 = 'mdi mdi-minus-circle-outline';
    } else if (this.jsonbtn2 === 'mdi mdi-minus-circle-outline') {
      this.jsonbtn2 = 'mdi mdi-plus-circle-outline';
    }
  }


}
