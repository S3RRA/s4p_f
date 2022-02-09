import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { Smart4PService } from 'src/app/services/s4p.service';
  
@Component({
  selector: 'app-piscopes',
  templateUrl: './piscopes.component.html',
  styles: [],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional:true}),
        query(':enter', stagger('2ms', [
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
export class PiscopesComponent implements OnInit {

  piscopes: any;
  almacen: any;

  display = false;
  piscope: any;

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

  constructor( private smart4p: Smart4PService, private activatedRoute: ActivatedRoute ) {
    this.activatedRoute.params.subscribe( (r:any) => {
      const env = r.env;
      this.where = [env, 'Pi-scopes'];
      Swal.fire({
        allowOutsideClick: false,
        title: 'Loading...',
        text: 'Please wait',
      });
      Swal.showLoading();
        
      this.smart4p.getData(env, 'scopes').subscribe(
        (r: any) => {
          Swal.close();
          this.piscopes = r.scopes;
          this.almacen = r.scopes;
          this.Toast.fire({
            icon: 'success',
            title: 'Data loaded successfully'
          });
        },
        e => {
          Swal.close();
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'There has been a problem loading data, please retry',
            footer: 'If the error persists please notify support',
            showConfirmButton: false,
            timer: 3500
          });
        }
      );
    });
  }

  ngOnInit(): void {
  }

  buscar( termino: string ){

    const piscopeArray = [];

    if ( termino.length === 0){
      this.piscopes = this.almacen;
    }

    termino = termino.toLowerCase();

    for ( const piscope of this.piscopes ){

      const title: string = piscope.title[0].value.toLowerCase();
      const id: string = piscope.id

      if ( title.indexOf( termino ) === 0 || id.indexOf( termino )){
        piscopeArray.push( piscope );
      }

    }
    this.piscopes = piscopeArray;

  }

  displayPiscope( piscope: any[]){
    this.display = !this.display;
    this.piscope = piscope;
  }

  close(){
    this.display = false;
  }

  export( what: string ){
    //this.excel.exportExcel(what);
  }

  export2(){
    //this.excel.getData(this.piscope, 'pi-scope');
  }

}
