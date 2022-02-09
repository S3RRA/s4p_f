import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { Smart4PService } from 'src/app/services/s4p.service';

@Component({
  selector: 'app-webviews',
  templateUrl: './webviews.component.html',
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
export class WebviewsComponent implements OnInit {

  where: any;

  webviews: any;
  almacen: any;

  constructor(private smart4p: Smart4PService, private activatedRoute: ActivatedRoute) { 
    Swal.fire({
      allowOutsideClick: false,
      title: 'Loading...',
      text: 'Please wait',
    });
    Swal.showLoading();
    this.activatedRoute.params.subscribe( (r:any) => {
      const env = r.env;
      this.where = [env, 'Webviews'];
      this.smart4p.getData(env, 'webviews').subscribe(
        (r: any) => {
          this.webviews = r.webviews;
          this.almacen = r.webviews;
          Swal.close();
        },
        e => console.log(e)
      );
    })
  }

  ngOnInit(): void {
  }

  buscar(termino: string){
    const webviewArray: any[] = [];
    termino = termino.toLowerCase();

    for (let webview of this.webviews) {
      const name = webview.id.toLowerCase();
      if (name.indexOf(termino) == 0) {
        webviewArray.push(webview);
      }
    }
    this.webviews = webviewArray;
    if (termino.length === 0) {
      this.webviews = this.almacen;
    }
  }

}
