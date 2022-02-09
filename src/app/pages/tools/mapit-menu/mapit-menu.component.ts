import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { Smart4PService } from '../../../services/s4p.service';

@Component({
  selector: 'app-mapitmenu',
  templateUrl: './mapit-menu.component.html',
  styles: [],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional:true}),
        query(':enter', stagger('100ms', [
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
export class MapitMenuComponent implements OnInit {

  ids: any;
  almacen: any;

  where = ['Map it'];

  selection: any;

  env: any;

  constructor( private smart4p: Smart4PService ) {
    smart4p.getIds().subscribe(
      r => {
        this.ids = r;
        this.almacen = r;
      },
      e => {
        console.log(e);
      }
    )
  }

  ngOnInit(): void {
    
  }
  //id, type, environment
  filter(env: string, el?: string){
    if(env !== '')this.env = env.substr(4);
    if(el){
      switch(this.env){
        case 'PRE':
          this.env = 'es-pre';
          break;
        case 'PRO':
          this.env = 'es-pro';
          break;
        case 'CERT':
          this.env = 'es-cert';
          break;
      };
      el = el.substr(3);
      const result = [];
      for(let id of this.ids){
        if(id.type === el && id.environment === this.env) result.push(id);
      }
      this.ids = result;
    }
  }

  buscar(termino: string) {
    const idsArray: any[] = [];

    termino = termino.toString().toLowerCase();

    for (let id of this.ids) {
      const name = id.id.toLowerCase();
      if (name.indexOf(termino) == 0) {
        idsArray.push(id);
      }
    }
    this.ids = idsArray;
    if (termino.length === 0) {
      this.ids = this.almacen;
    }
  }
  

}
