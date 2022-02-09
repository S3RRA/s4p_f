import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UsuarioModel } from '../models/usuario/usuario.module';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userToken!: string;
  roles!: string[];

  constructor( private http: HttpClient ) { }

  //url = `http://localhost:3001/Smart4P`;
  url = 'https://smart4p.azurewebsites.net/Smart4P'


  logout(){
    localStorage.removeItem('token');
  }

  login( usuario: UsuarioModel ){

    return this.http.post( `${this.url}/signin`, usuario).pipe(
      map( (r:any) => {
        this.guardarToken( r, usuario.email );
        return r;
      })
    );

  }

  changePassword( password: string ){

    const headers = new HttpHeaders({
      authorization: `Bearer ${ localStorage.getItem('token') }`
    });

    const email = localStorage.getItem('email');

    const body: any = {
      email,
      password
    };

    return this.http.post(`${this.url}/reset-password`, body, { headers });

  }

  private guardarToken( response: any, email: string ){
    this.userToken = response.access_token;
    this.roles = response.roles;
    localStorage.setItem('token', response.access_token);

    let hoy = new Date();
    hoy.setSeconds( 3600 );

    localStorage.setItem( 'expires', hoy.getTime().toString() );

  }

  leerToken(){

    if ( localStorage.getItem('token') ){
      this.userToken = `${ localStorage.getItem('token') }`;
    }else{
      this.userToken = '';
    }

    return this.userToken;
  }

  estaAutenticado(): boolean {

    if ( this.userToken.length < 2 ){
      return false;
    }

    let expira = Number( localStorage.getItem( 'expires' ) );
    const expiraDate = new Date();

    expiraDate.setTime( expira );

    if ( expiraDate > new Date() ){
      return true;
    } else {
      return false;
    }
    
  }

  private decodetk(){

  }

}
