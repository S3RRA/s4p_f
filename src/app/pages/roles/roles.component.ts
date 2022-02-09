import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { Smart4PService } from 'src/app/services/s4p.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styles: [
  ]
})
export class RolesComponent implements OnInit {

  roles: any;

  iconRoles: any[] = [];
  iconIdentifierScopes: any[] = [];
  iconRoleScopes: any[] = [];
  iconUserScopes: any[] = [];

  searchAlmacen: any[] = [];

  where: any;

  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast: any) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });

  constructor( private smart4p: Smart4PService, private activatedRoute: ActivatedRoute ) {
    this.activatedRoute.params.subscribe( (r:any) => {
      const env = r['env'];
      this.where = [env, 'Roles'];
      Swal.fire({
        allowOutsideClick: false,
        title: 'Loading...',
        text: 'Please wait',
      });
      Swal.showLoading();
      this.iconRoles.length = 4;
      this.iconRoles.fill('mdi mdi-plus-circle-outline');
      this.iconIdentifierScopes.length = 100;
      this.iconIdentifierScopes.fill('mdi mdi-plus-circle-outline');
      this.iconRoleScopes.length = 100;
      this.iconRoleScopes.fill('mdi mdi-plus-circle-outline');
      this.iconUserScopes.length = 100;
      this.iconUserScopes.fill('mdi mdi-plus-circle-outline');
  
      this.smart4p.getData(env, 'roles').subscribe(
        (r:any) => {
          Swal.close();
          this.getAlmacen(r);
          this.Toast.fire({
            icon: 'success',
            title: 'Data loaded successfully'
          });
        },
        e => {
          Swal.close();
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'There has been a problem loading data, please retry',
            footer: 'If the error repeats please notify support',
            showConfirmButton: false,
            timer: 3500
          });
        }
      );
    });
  }
    

  ngOnInit(): void {
  }

  getAlmacen(r: any){
    this.roles = r.roles;
    for ( let i = 0; i < 4; i++ ){
      this.searchAlmacen[i] = {
        user: r[i].user_bound_scopes,
        identifier: r[i].identifier_bound_scopes,
        role: r[i].role_bound_scopes
      };
    }
  }

  buscar(type: string, position: number, termino: string){

    const scopeArray: any[] = [];

    if ( termino.length === 0 ){
      if ( type === 'user'){
        this.roles[position]['user_bound_scopes'] = this.searchAlmacen[position].user;
      }else if ( type === 'id' ){
        this.roles[position]['identifier_bound_scopes'] = this.searchAlmacen[position].identifier;
      }else if ( type === 'role' ){
        this.roles[position]['role_bound_scopes'] = this.searchAlmacen[position].role;
      }
    }

    termino = termino.toLowerCase();

    switch (type) {
      case 'user': {
        for(let scope of this.searchAlmacen[position]['user_bound_scopes']){

          scope = scope.toLowerCase();

          if( scope.indexOf( termino ) === 0){
            scopeArray.push( scope );
          }

        }
        this.roles[position]['user_bound_scopes'] = scopeArray;
        break;
      }
    }




  }

  displayRole(position: number){
    if(this.iconRoles[position] === 'mdi mdi-plus-circle-outline'){
      this.iconRoles[position] = 'mdi mdi-minus-circle-outline';
    }else{
      this.iconRoles[position] = 'mdi mdi-plus-circle-outline';
    }
  }

  displayIdentifierScopes(position: number){
    if(this.iconIdentifierScopes[position] === 'mdi mdi-plus-circle-outline'){
      this.iconIdentifierScopes[position] = 'mdi mdi-minus-circle-outline';
    }else{
      this.iconIdentifierScopes[position] = 'mdi mdi-plus-circle-outline';
    }
  }

  displayRoleScopes(position: number){
    if(this.iconRoleScopes[position] === 'mdi mdi-plus-circle-outline'){
      this.iconRoleScopes[position] = 'mdi mdi-minus-circle-outline';
    }else{
      this.iconRoleScopes[position] = 'mdi mdi-plus-circle-outline';
    }
  }

  displayUserScopes(position: number){
    if(this.iconUserScopes[position] === 'mdi mdi-plus-circle-outline'){
      this.iconUserScopes[position] = 'mdi mdi-minus-circle-outline';
    }else{
      this.iconUserScopes[position] = 'mdi mdi-plus-circle-outline';
    }
  }



}
