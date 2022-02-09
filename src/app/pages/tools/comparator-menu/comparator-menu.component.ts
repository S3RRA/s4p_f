import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import * as _ from 'lodash';
import { Router, ActivatedRoute } from '@angular/router';
import { Smart4PService } from 'src/app/services/s4p.service';

@Component({
  selector: 'app-comparatormenu',
  templateUrl: './comparator-menu.component.html',
  styles: [
  ]
})
export class ComparatorMenuComponent implements OnInit {

  display = false;
  type: any;

  progressbar: any;
  progressbar_percent: any;

  same = false;
  diff = false;

  searched: any;
  almacen: any;

  id: string = '';
  env: string = '';
  selected = false;

  elements = [
    //{ id: 'apps', label: 'Apps'},
    { id: 'purposes', label: 'Purposes'},
    //{ id: 'apis', label: 'Apis'},
    //{ id: 'datasets',label: 'Datasets'},  
  ]
  flag: any;

  constructor(private smart4p: Smart4PService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
  }

  diffElements(id: string, env: string){
    if(this.id.length === 0){
      this.id = id;
      this.env = env;
      this.selected = true;
      return;
    } else {
      this.router.navigate([`/Smart4P/comparator/${ this.type }_/${ this.id }_${ this.env }_vs_${ id }_${ env }`]);
      return;
    }
  }

  buscar( termino: string ){
    let almacen = [];

    termino = termino.toString().toLowerCase();

    for (let element of this.searched) {
      const id_: string = element.id;
      const id = id_.toLowerCase();
      if (id.indexOf(termino) == 0) {
        almacen.push(element);
      }
    }
    this.searched = almacen;
    if (this.searched.length === 0) {
      this.searched = this.almacen;
    }
  }

  async radio(element?:string){
    
    this.type = element;
    this.progressbar = true;
    await this.getData();
    setTimeout(() => {
      this.display = true;
    }, 750);
    
    return;
  }

  async getData(){

    await this.smart4p.getData('CERT_', this.type).subscribe(
      (r:any) => { 
        this.searched = r[`${this.type}`]; 
        //progressbar.style.width = `${ progressbar.style.width }`;
    });
  }
}
