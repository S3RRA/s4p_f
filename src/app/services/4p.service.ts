import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FourthPlatformService {

  constructor( private http: HttpClient ) { }

  token: string = "";
  
  //USERPROFILE
  url = 'https://api.es-pre.baikalplatform.com/userprofile/';

  async getToken(){
    const response = await this.http.post('https://auth.es-pre.baikalplatform.com/token?client_id=qa_adapters_client&client_secret=JpJzAr7vU(nW8e&grant_type=client_credentials&purpose=identify-customer search-customer&Content-Type=application/x-www-form-urlencoded', '');
    response.subscribe(
      (d: any) => {
        this.token = `Bearer ${ d['access_token'] }`;
      }
    );
  }

  getUserbyID(version: string, id: string){
    const headers = new HttpHeaders({
      Authorization: this.token
    });
    return this.http.get(`${ this.url }${ version }/users/${ id }`, { headers });
  }

}
