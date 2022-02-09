import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class Smart4PService {

  constructor( private http: HttpClient ) { }

  token = localStorage.getItem('token');
  email = localStorage.getItem('email');
  url = 'https://smart4p.azurewebsites.net/Smart4P'
  //url = 'http://localhost:3001/Smart4P'

  getData( environment: string, search?: string){
    const headers = new HttpHeaders({
      authorization: `Bearer ${ this.token }`,
      email: `${ this.email }`
    });
    const options = { headers };
    if(environment === 'CERT_'){
      return this.http.get(`${this.url}/purposes-all`, options);
    } else {
        return this.http.get(`${this.url}/${ environment }/${ search }`, options);
    }

  }

  getDataById(environment: string, search: string, id: string){
    const headers = new HttpHeaders({
      authorization: `Bearer ${ this.token }`,
      email: `${ this.email }`
    });
    const options = { headers };

    return this.http.get(`${this.url}/${ environment }/${ search }/${ id }`, options);
  }

  getRelations(environment: string, type: string, id?: string){
    const headers = new HttpHeaders({
      authorization: `Bearer ${ this.token }`,
      email: `${ this.email }`
    });
    let body = {};
    if(id){
      body = { type, id };
    } else {
      body = { type };
    }

    return this.http.post(`${this.url}/${ environment }/relations`, body, { headers });
  }

  getExcelRelations(environment: string, type: string, id?: string){
    const headers = new HttpHeaders({
      authorization: `Bearer ${ this.token }`,
      email: `${ this.email }`
    });
    let body = {};
    if(id){
      body = { type, id };
    } else {
      body = { type };
    }

    return this.http.post(`${this.url}/${ environment }/excel-relations`, body, { headers });
  }
  
  getNetworkData(environment: string, type: string, id: string){
    const headers = new HttpHeaders({
      authorization: `Bearer ${ this.token }`,
      email: `${ this.email }`
    });
    const body = {
      type,
      id
    };
    return this.http.post(`${this.url}/${ environment }/network`, body, { headers });
  }

  getIds(){
    const headers = new HttpHeaders({
      authorization: `Bearer ${ this.token }`,
      email: `${ this.email }`
    });
    return this.http.get(`${this.url}/ids`, { headers });
  }

  getTestClient(v: number, id: string, type: string):Observable<any>{
    const headers = new HttpHeaders({
      authorization: `Bearer ${ this.token }`,
      email: `${ this.email }`
    });
    const body = {
      v,
      id,
      type
    };
    return this.http.post(`${this.url}/test-clients`, body, { headers });
  }

  getJsonDiff(data: any){
    const headers = new HttpHeaders({
      authorization: `Bearer ${ this.token }`,
      email: `${ this.email }`
    });
    let body = data;
    
    return this.http.post(`${this.url}/json-diff`, body, { headers });
  }

  getNotifications(){
    const headers = new HttpHeaders({
      authorization: `Bearer ${ this.token }`,
      email: `${ this.email }`
    });
    return this.http.get(`${this.url}/notifications`, { headers });
  }
  
}
