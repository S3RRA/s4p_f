import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import Swal from 'sweetalert2';

import { ActivatedRoute } from '@angular/router';
import { Smart4PService } from 'src/app/services/s4p.service';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional:true}),
        query(':enter', stagger('10ms', [
          animate('500ms ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75px)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))
        ]))
      ])
    ])
  ]
})
export class AppsComponent implements OnInit {
  options: any;
  /*Almacenes info*/
  apps: any;
  almacen: any;
  env: any;

  /*Breadcrump*/
  where: any;

  /*Alerta data caragada*/
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
  /*Info grafica*/
  //Counts
  password: any[]= [];
  clientcr: any[] = [];
  auth: any[] = [];
  jwt: any[] = [];

  list: any;
  displayList = false;
  grantType: any;

  labels1: any;
  data1: any;

  constructor(
      private smart4p: Smart4PService, 
      private activatedRoute: ActivatedRoute 
    ) {
    Swal.fire({
      allowOutsideClick: false,
      title: 'Loading...',
      text: 'Please wait',
    });
    Swal.showLoading();
    this.activatedRoute.params.subscribe( (r:any) => {
      this.where = [r['env'], 'Apps'];
      this.env = r['env'];
      this.smart4p.getData(this.env, 'apps').subscribe( (r:any) => {
        Swal.close();
        this.apps = r.apps;
        this.almacen = r.apps;
        this.Toast.fire({
          icon: 'success',
          title: 'Data loaded successfully'
        });
      }, (e:any) => {
        Swal.close();
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'There has been a problem loading data, please retry',
          footer: 'If the error persists please notify support',
          showConfirmButton: false,
          timer: 3500
        });
      });
    });
  }

  ngOnInit(): void { }

  buscar(termino: string) {
    const appArray: any[] = [];
    termino = termino.toLowerCase();

    for (let app of this.apps) {
      const name = app['name'].toLowerCase();
      const id = app['id'].toLowerCase();
      if (name.indexOf(termino) == 0 || id.indexOf(termino) == 0) {
        appArray.push(app);
      }
    }
    this.apps = appArray;
    if (termino.length === 0) {
      this.apps = this.almacen;
    }
  }

  export(){
    //this.relate.getData(this.env, 'apps');
  }

}
