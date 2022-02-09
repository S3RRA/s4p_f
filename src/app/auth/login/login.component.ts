import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioModel } from '../../models/usuario/usuario.module';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  almacenUser = false;

  constructor( private auth: AuthService, private router: Router ) { }

  ngOnInit(): void {

    if ( localStorage.getItem('email') ){
      this.usuario.email = `${ localStorage.getItem('email') }`;
      this.almacenUser = true;
    }

  }

  login( form: NgForm ){

    if ( form.invalid ) { return; }

    Swal.fire({
      allowOutsideClick: false,
      title: 'Loading...',
      text: 'Please wait'
    });
    Swal.showLoading();

    this.auth.login( this.usuario ).subscribe( ( resp ) => {

      Swal.close();
            
      if ( this.almacenUser ){
        localStorage.setItem('token', resp['access_token'] );
      } 
      
      localStorage.setItem('email', this.usuario.email);

      this.router.navigateByUrl('Smart4P/dashboard');

    }, ( err ) => {

      Swal.fire({
        icon: 'error',
        title: 'Authentication error',
        text: 'Authentication error, retry, if persists please contact suport'
      })

    });

  }

}
