import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appRole]'
})
export class PermissionsDirective implements OnInit{

  roles: any;
  permissions: any;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private auth: AuthService
  ) { }

  ngOnInit(): void{
    this.roles = this.auth.roles;
    this.updateView();
  }

  @Input()
  set appRole(val: Array<string>){
    this.viewContainer.createEmbeddedView(this.templateRef);
    this.permissions = val;
    this.updateView();
  }

  private updateView(): void {
    this.viewContainer.clear();
    if(this.checkPermission()){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  private checkPermission():boolean{
    let hasPermission = false;
    if(this.roles){
      for(const role of this.permissions){
        const permissionFound = this.roles.find( (p: string) => {
          return (p.toUpperCase() === role.toUpperCase());
        })
        if(permissionFound){
          hasPermission = true;
          break;
        }
      }
    }
    return hasPermission;
  }

}
