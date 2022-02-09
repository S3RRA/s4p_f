import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { ActivatedRoute } from '@angular/router';
import { Smart4PService } from 'src/app/services/s4p.service';

@Component({
  selector: 'app-datasets',
  templateUrl: './datasets.component.html',
  styles: [
  ]
})
export class DatasetsComponent implements OnInit {

  options: any;
  list: any;
  dataset_list: any;
  displayme = false;
  env: any;
    
  datasets: any;
  almacen: any;

  data1: any;
  labels1: any;

  where = ['Cambiar', 'datasets'];

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

  constructor( private smart4p: Smart4PService, private activatedRoute: ActivatedRoute ) {
    
    Swal.fire({
      allowOutsideClick: false,
      title: 'Loading...',
      text: 'Please wait',
    });
    Swal.showLoading();
    this.activatedRoute.params.subscribe( (p:any) => {
      const env = p.env;
      const where = [env, 'Datasets'];
      this.smart4p.getData(env, 'datasets').subscribe(
        (r:any) => {
          this.datasets = r.datasets;
          this.almacen = r.datasets;
          this.Toast.fire({
            icon: 'success',
            title: 'Data loaded successfully',
          });
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
    });
  
  }

  ngOnInit(): void {
  }

  buscar( termino: string ){

    const datasetArray: any[] = [];

    if ( termino.length === 0){
      this.datasets = this.almacen;
    }

    termino = termino.toLowerCase();

    for ( const dataset of this.datasets ){

      const title = dataset.title.toLowerCase();
      const id = dataset.id.toLowerCase();

      if ( title.indexOf( termino ) === 0 || id.indexOf( termino )){
        datasetArray.push( dataset );
      }

    }
    this.datasets = datasetArray;

  }
  
  getListData(self: any){
    const clickedDataset = self.point.category;
    const [dataset]: any = this.datasets.filter( (dataset: any) => dataset.dataset_id === clickedDataset);
    const keys = Object.keys(dataset.dataset_schema['x-fp-join-definitions']);
    for(var i=0; i<keys.length; i++){
      this.list.push(dataset.dataset_schema['x-fp-join-definitions'][keys[i]]);
    }
    this.dataset_list = dataset.dataset_id;
    this.displayme = true;
  }

}
