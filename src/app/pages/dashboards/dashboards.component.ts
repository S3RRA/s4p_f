import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Smart4PService } from 'src/app/services/s4p.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styles: [
  ]
})
export class DashboardsComponent implements OnInit {

  data: any;
  env = 'a';
  chartData: any;
  purposesWithoutScopes: any;

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

  constructor( private smart4p: Smart4PService, private route: ActivatedRoute) { 

    this.route.params.subscribe(
      (r: any) => {
        this.env = r.env;
        Swal.fire({
          allowOutsideClick: false,
          title: 'Loading...',
          text: 'Please wait',
        });
        Swal.showLoading();
      
        this.smart4p.getData(this.env, '/').subscribe(
          (r: any) => {
            this.data = r;
            this.chartData_();
            Swal.close();
            this.purposesWithNoScopes(r['purposes']);
          },
          (e: any) => {
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
      }
    );

  }

  ngOnInit(): void {
  }

  purposesWithNoScopes(purposes: any){
    const result = [];
    for(let purpose of purposes){
      if(purpose.pi_scopes.length === 0) result.push(purpose);
    }
    this.purposesWithoutScopes = result;
  }

  chartData_(){
    this.chartData = [
      ['Apps', this.data.apps.length],
      ['Apis', this.data.apis.length],
      ['Purposes', this.data.purposes.length],
      ['Scopes', this.data.scopes.length],
      ['Datasets', this.data.datasets.length],
    ];
  }

}
