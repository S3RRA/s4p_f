import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { Smart4PService } from 'src/app/services/s4p.service';

@Component({
  selector: 'app-purposeview',
  templateUrl: './purpose-view.component.html',
  styles: [
  ]
})
export class PurposeViewComponent implements OnInit {

  id: any;
  purpose: any;

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

    Swal.fire({
      allowOutsideClick: false,
      title: 'Loading...',
      text: 'Please wait',
    });
    Swal.showLoading();
    this.activatedRoute.params.subscribe(
      (p) => { 
        const env = p['env'];
        this.id = p['id'];
        this.where = [env, 'Purposes', this.id];
        this.smart4p.getData(env, 'purposes').subscribe(
          (r:any) => {
            for(let purpose of r.purposes){
              if(purpose.id === this.id) this.purpose = purpose;
            }
            Swal.close();
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
      },
      (e) => console.log(e)
    );
    

  }

  ngOnInit(): void {
  }

}
