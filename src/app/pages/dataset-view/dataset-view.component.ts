import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Smart4PService } from 'src/app/services/s4p.service';

@Component({
  selector: 'app-dataset-view',
  templateUrl: './dataset-view.component.html',
  styles: [
  ]
})
export class DatasetViewComponent implements OnInit {

  id: any;
  type: any;
  env: any;
  where: any;

  dataset: any;

  constructor(
      private activatedRoute: ActivatedRoute,
      private smart4p: Smart4PService, 
    ) { 

    this.activatedRoute.params.subscribe( (params: any) => {
      this.id = params.id;
      this.type = params.type;
      this.env = params.env;
      this.where = [this.env, 'Apps', this.id];
    });

    this.smart4p.getDataById(this.env, 'datasets', this.id).subscribe(
      (r: any) => {
        this.dataset = r.dataset;
      },
      (e: any) => {

      }
    );

  }

  ngOnInit(): void {
  }

}
