import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  token = localStorage.getItem('token');
  email = localStorage.getItem('email');

  //url = 'http://localhost:3001/Smart4P';
  url = 'https://smart4p.azurewebsites.net/Smart4P'

  getUsers(){
    const headers = new HttpHeaders({
      authorization: `Bearer ${ this.token }`,
      email: `${ this.email }`
    });
    const options = { headers };

    return this.http.get(`${ this.url }/admin/users`, options);
  }

  deleteUser(id: string){
    const headers = new HttpHeaders({
      authorization: `Bearer ${ this.token }`,
      email: `${ this.email }`
    });
    const options = { headers };

    return this.http.delete(`${ this.url }/admin/${ id }`, options);
  }

  createUser(user: any){
    const headers = new HttpHeaders({
      authorization: `Bearer ${ this.token }`,
      email: `${ this.email }`
    });
    const options = { headers };

    const body = {
      email: user.email,
      password: user.password,
      roles: user.roles
    }

    return this.http.post(`${ this.url }/admin/signup`, body, options);
  }

  resetPassword(){
    const headers = new HttpHeaders({
      authorization: `Bearer ${ this.token }`,
      email: `${ this.email }`
    });
    const options = { headers };

    return this.http.put(`${ this.url }/admin/users`, options);
  }

}
