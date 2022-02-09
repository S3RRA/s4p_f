import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute, UrlTree } from '@angular/router';
import { Smart4PService } from 'src/app/services/s4p.service';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styles: [],
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
export class ApisComponent implements OnInit {

  options: any;

  env: any;

  apis: any;
  almacen: any;

  where: any;

  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast: any) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });

  constructor( 
      private smart4p: Smart4PService,
      private activatedRoute: ActivatedRoute,
      private router: Router
    ) {

    this.activatedRoute.params.subscribe( (r:any) => {
      this.env = r.env
      this.where = [this.env, 'Apis'];
      Swal.fire({
        allowOutsideClick: false,
        title: 'Loading...',
        text: 'Please wait',
      });
      Swal.showLoading();
  
      this.smart4p.getData(this.env, 'apis').subscribe( (r:any) => {
        Swal.close();
        this.apis = r.apis;
        this.almacen = r.apis;
        this.Toast.fire({
          icon: 'success',
          title: 'Data loaded successfully'
        });
      }, (e: any) => {
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

  ngOnInit(): void {
    
  }

  buscar( termino: string ){

    const apiArray: any[] = [];

    if ( termino.length === 0){
      this.apis = this.almacen;
    }

    termino = termino.toLowerCase();

    for ( const api of this.apis ){

      const title = api.title.toLowerCase();
      const id = api.id.toLowerCase();

      if ( title.indexOf( termino ) === 0 || id.indexOf( termino ) === 0){
        apiArray.push( api );
      }

    }
    this.apis = apiArray;

  }

  export(){

    //this.relate.getData(this.env, 'apis');

  }


  navigateTo(self: any){
    this.router.navigate([`Smart4P/${ this.env }/apis/${ self.point.category }`])
  }

}
