import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { UsuarioModel } from '../../models/usuario/usuario.module';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( private settingService: SettingsService, private auth: AuthService ) { }

  where = ['Account Settings'];

  wrongPassword = false;

  ngOnInit(): void {
    this.settingService.checkCurrentTheme();
  }

  changeTheme( theme:string ){
    this.settingService.changeTheme(theme);
  }

  changePassword(){

    const currentPassword = (<HTMLInputElement>document.getElementById('currentPassword')).value;

    const usuario: UsuarioModel = {
      email: `${ localStorage.getItem('email') }`,
      password: currentPassword
    };

    this.auth.login( usuario ).subscribe(
      r => {
        if(r['access_token']){
          this.changeIt();
        } else {
          this.wrongPassword = true;
        }
      },
      e => {
        this.wrongPassword = true;
      }
    );
  }

  changeIt(){
    Swal.fire({
      title: 'Type new password',
      html: `<input type="password" id="password1" class="swal2-input" placeholder="Type new password..." class="form-control">
      <input type="password" id="password2" class="swal2-input" placeholder="Retype new password..." class="form-control">`,
      confirmButtonText: 'Change password',
      focusConfirm: false,
      preConfirm: async () => {
        const password1 = (<HTMLInputElement>document.getElementById('password1')).value;
        const password2 = (<HTMLInputElement>document.getElementById('password2')).value;
        if (!password1 || !password2) {
          Swal.showValidationMessage(`Please enter new password`);
        }
        if ( password1 !== password2 ) {
          Swal.showValidationMessage(`Passwords must match`);
        } else {
          await this.auth.changePassword( password1 ).subscribe();
        }
        return `Password changed successfully`;
      }
    }).then((result: any) => {
      Swal.fire(result.value.trim());
    })
  }

  alertPop(what: string){
    /*Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3']
    }).queue([
      {
        title: 'Add a title for your request',
        text: 'Try to be brief'
      },
      {
        title: 'Add a resume for your request',
        text: 'Resume your request'
      },
      {
        title: 'Add a detailed description',
        text: 'Try to be as descriptive as possible so that we can help you'
      }
    ]).then((result: string[]) => {
      Swal.fire({
        title: 'Do you want to send your request?',
        showDenyButton: true,
        confirmButtonText: `Yes`,
        denyButtonText: `Cancel`,
      }).then((result: any) => {
        /* Read more about isConfirmed, isDenied below *//*
        if (result.isConfirmed) {
          Swal.fire('Sent request', '', 'success');
        } else if (result.isDenied) {
          Swal.fire('Cancelled request', '', 'info');
        }
      });
    });*/
  }

}
