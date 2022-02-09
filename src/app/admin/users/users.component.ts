import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: any;
  user: any;

  constructor(private admin: AdminService) { 
    this.admin.getUsers().subscribe(
      (r: any) => {
        this.users = r.users;
      },
    );
  }

  deleteUser(user: any){
    Swal.fire({
      icon: 'question',
      title: `Do you want to delete user ${ user.email }?`,
      text: 'This action is irreversible',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      showDenyButton: true,
      confirmButtonText: `Delete`,
      denyButtonText: `Cancel`,
    }).then((result: any) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.admin.deleteUser(user._id).subscribe(
          (r:any) => {
            this.users = this.users.filter((user_: any) => user_.email !== user.email)
            Swal.fire('User deleted!', '', 'success')
          },
          (e: any) => {
            console.log(e);
          }
        )
      } else if (result.isDenied) {
        Swal.fire('Deletion aborted', '', 'info')
      }
    });
  }

  createUser(){
    let email: string;
    let password: string;
    let roles: string[] = [];
/*
    Swal.mixin({
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3']
    }).queue([
      {
        title: 'Email',
        text: 'Enter email for new user',
        input: 'text',
        inputValidator: (value: any) => {
          if (!value) {
            return 'You need to enter an email!'
          }
          return;
        },
        preConfirm: function (val: any) {
          email = val;
        }
      },
      {
        title: 'Password',
        text: 'Enter provissional password',
        input: 'password',
        inputValidator: (value: any) => {
          if (!value) {
            return 'You need to enter a password!'
          }
          return;
        },
        preConfirm: function (val: any) {
          password = val;
        }
      },
      {
        title: 'Roles',
        text: 'If no role are selected, the read role for pre-productive environments will be assigned',
        html:
              '<div class="form-check">'+
                '<input class="form-check-input" type="checkbox" value="user-profile" id="userprofile">'+
                '<label class="form-check-label" for="userprofile">'+
                    'User profile'+
                '</label>'+
              '</div>'+
              '<div class="form-check">'+
                '<input class="form-check-input" type="checkbox" value="admin" id="admin">'+
                '<label class="form-check-label" for="admin">'+
                    'Admin'+
                '</label>'+
              '</div>'+
              '<div class="form-check">'+
                '<input class="form-check-input" type="checkbox" value="full-access" id="fullaccess">'+
                '<label class="form-check-label" for="fullaccess">'+
                    'Full access'+
                '</label>'+
              '</div>'+
              '<div class="form-check">'+
                '<input class="form-check-input" type="checkbox" value="es-pre" id="es-pre">'+
                '<label class="form-check-label" for="es-pre">'+
                    'Preproduction'+
                '</label>'+
              '</div>'+
              '<div class="form-check">'+
                '<input class="form-check-input" type="checkbox" value="notifications" id="notifications">'+
                '<label class="form-check-label" for="notifications">'+
                    'Notifications'+
                '</label>'+
              '</div>',
        preConfirm: function (val: any) {
          let admin = document.getElementById('admin') as HTMLInputElement;
          let up = document.getElementById('userprofile') as HTMLInputElement;
          let fullaccess = document.getElementById('fullaccess') as HTMLInputElement;
          let pre = document.getElementById('es-pre') as HTMLInputElement;
          for(let element of [admin, up, fullaccess, pre]){
              if(element.checked) roles.push(element.value);
          }
        }
      }
    ]).then((result: string[]) => {
      Swal.fire({
        title: 'Do you want to add new user?',
        text: 'Verify data:',
        html: `<label for="email">Email:</label><div id="email"><b>${ email }</b></div>`+
              `<label for="password">Provissional password:</label><div id="password"><b>${ password }</b></div>`+
              `<label for="roles">Assigned roles</label><div id="email"><b>${ roles }</b></div>`,
        showDenyButton: true,
        confirmButtonText: `Save user`,
        denyButtonText: `Cancel`,
        preConfirm: async () => {
          let send = {
            email,
            password,
            roles
          }
          await this.admin.createUser(send).subscribe(
            (r: any) =>  Swal.fire('Sent request', '', 'success'),
            (e: any) => Swal.fire('Cancelled request', '', 'warning')
          );
        }
      });
    });*/
  }

  async updateUser(user: any){
    this.user = user;

    let inputOptions = {
      'email': 'Update email',
      'roles': 'Update roles',
      'password': 'Update password'
    };

    /*const toupdate = await Swal.fire({
      icon: 'question',
      title: `Select action`,
      input: 'radio',
      inputOptions: inputOptions,
      inputValidator: (value: any) => {
        if (!value) {
          return 'You need to choose something!'
        }
        return;
      },
      showCancelButton: false,
      showConfirmButton: false
    });

    if(toupdate){
      switch(toupdate){
        
      }
    }
*/
  }

}


