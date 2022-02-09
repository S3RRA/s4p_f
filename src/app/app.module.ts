import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { UsersComponent } from './admin/users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { PermissionsModule } from './guards/permissions.module';


@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    SharedModule,
    PermissionsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
