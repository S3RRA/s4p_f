import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Smart4PService } from 'src/app/services/s4p.service';

@Component({
  selector: 'app-comparator',
  templateUrl: './comparator.component.html',
  styles: [
  ]
})
export class ComparatorComponent implements OnInit {

   id: any;
   data: any;
   envA: any;
   envB: any;

   sameEnv: any;

   iconMatch: any;

   display: any;

   title: any;
   chartData: any;

   response: any;

   env1: any;
   env2: any;

   //monaco
   options: any;
   
   originalModel: any;//DiffEditorModel;
   modifiedModel: any;//DiffEditorModel;

   //downloadJson
   downloadJsonHref: any

   constructor(private smart4p: Smart4PService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { 
       this.route.params.subscribe(
           (r: any) => {
               let tocompare = r.id.split('_');
               let type = r.type.split('_');
               this.data = {
                   type: type[0],
                   id1: tocompare[0],
                   env1: tocompare[1],
                   id2: tocompare[3],
                   env2: tocompare[4]
               };
               if(this.data.env1 === 'es-pre') this.env1 = 'PRE';
               if(this.data.env2 === 'es-pre') this.env2 = 'PRE';
               if(this.data.env1 === 'es-cert') this.env1 = 'CERT';
               if(this.data.env2 === 'es-cert') this.env2 = 'CERT';
               if(this.data.env1 === 'es-pro') this.env1 = 'PRO';
               if(this.data.env2 === 'es-pro') this.env2 = 'PRO';
               this.smart4p.getJsonDiff(this.data).subscribe(
                   (r: any) => {

                       console.log(r);

                       this.response = r;
                       
                       //monaco
                       this.options = {theme: 'vs-dark', language: 'json'};
                   
                       this.originalModel = {
                           code: JSON.stringify(r.purposes[0],null,2),
                           language: 'json'
                       };
                       this.modifiedModel = {
                           code: JSON.stringify(r.purposes[1],null,2),
                           language: 'json'
                       };

                       //chart
                       let total_piscopes = r.scopesDiff.match.length + r.scopesDiff[`only${this.data.id1}${this.data.env1}`].length + r.scopesDiff[`only${this.data.id2}${this.data.env2}`].length;                        
                       let chart_data = [                
                           { name: 'Match', y: r.scopesDiff.match.length / total_piscopes },
                           { name: `Only ${r.purposes[0].id}`, y: r.scopesDiff[`only${this.data.id1}${this.data.env1}`].length / total_piscopes },
                           { name: `Only ${r.purposes[1].id}`, y: r.scopesDiff[`only${this.data.id2}${this.data.env2}`].length / total_piscopes },
                       ];
                       this.createchar(chart_data);

                   }, 
                   (e: any) => {
                       console.log(e);
                   }
               );
               
           }
       );
   }

   

   ngOnInit(): void {
   }

   createchar(chart_data: any){
       this.options = {
           chart: {
               type: 'pie',
               plotBackgroundColor: null,
               plotBorderWidth: null,
               plotShadow: false,
           },
           title: {
             text: 'Percentage of pi-scopes match:'
           },
           plotOptions: {
               pie: {
                   allowPointSelect: true,
                   cursor: 'pointer',
                   dataLabels: {
                       enabled: true,
                       format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                   }
               }
           },
           credits: {
             enabled: false
           },
           colors: [
               '#C466EF',
               '#EAC344',
               '#59C2C9',
               '#E66C64'
           ],
           series: [{
               data: chart_data
           }]
       };
   }

}
