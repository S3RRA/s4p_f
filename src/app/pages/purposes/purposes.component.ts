import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { Smart4PService } from 'src/app/services/s4p.service';

@Component({
  selector: 'app-purposes',
  templateUrl: './purposes.component.html',
  styles: [
  ]
})
export class PurposesComponent implements OnInit {
  options: any;

  purposes: any;
  almacen: any;
  purposesWithoutScopes: any;

  where: any;
  env: any;

  display = false;

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
      this.env = r['env'];
      this.where = [this.env, 'Purposes'];
      Swal.fire({
        allowOutsideClick: false,
        title: 'Loading...',
        text: 'Please wait',
      });
      Swal.showLoading();
  
      this.smart4p.getData(this.env, 'purposes').subscribe(
        (r: any) => {
          Swal.close();
          this.purposes = r.purposes;
          this.almacen = r.purposes;
          this.Toast.fire({
            icon: 'success',
            title: 'Data loaded successfully'
          });
          this.purposesWithNoScopes();
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

  purposesWithNoScopes(){
    //purposes with no scopes
    const res1 = [];
    for(let purpose of this.purposes){
      if(purpose.pi_scopes.length === 0) res1.push(purpose);
    }
    this.purposesWithoutScopes = res1;

  }


  buscar( termino: string ){

    const purposeArray = [];

    if ( termino.length === 0){
      this.purposes = this.almacen;
    }

    termino = termino.toLowerCase();

    for ( const purpose of this.purposes ){

      const title: string = purpose.title[0].value.toLowerCase();
      const id: string = purpose.id;

      if ( title.indexOf( termino ) === 0 || id.indexOf( termino )){
        purposeArray.push( purpose );
      }

    }
    this.purposes = purposeArray;

  }

  export() {
  }

}
