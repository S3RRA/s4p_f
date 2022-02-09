import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';

//Modulos
//import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';

//Pages
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { RolesComponent } from './roles/roles.component';
import { DatasetsComponent } from './datasets/datasets.component';
import { MapitComponent } from './tools/mapit/mapit.component';
import { ComparatorComponent } from './tools/comparator/comparator.component';
import { UserprofileComponent } from './tools/userprofile/userprofile.component';
import { WebviewsComponent } from './webviews/webviews.component';
import { DatasetViewComponent } from './dataset-view/dataset-view.component';
import { AppViewComponent } from './app-view/app-view.component';
import { ApiViewComponent } from './api-view/api-view.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MapitMenuComponent } from './tools/mapit-menu/mapit-menu.component';
import { ComparatorMenuComponent } from './tools/comparator-menu/comparator-menu.component';
import { AppsComponent } from './apps/apps.component';
import { ApisComponent } from './apis/apis.component';
import { PurposesComponent } from './purposes/purposes.component';
import { PiscopesComponent } from './piscopes/piscopes.component';
import { PurposeViewComponent } from './purpose-view/purpose-view.component';




@NgModule({
  declarations: [
    LandingPageComponent,
    PagesComponent,
    AccountSettingsComponent,
    AppsComponent,
    ApisComponent,
    PurposesComponent,
    PiscopesComponent,
    PurposeViewComponent,
    RolesComponent,
    AppViewComponent,
    ApiViewComponent,    
    DashboardsComponent,
    DatasetsComponent,
    MapitComponent,
    MapitMenuComponent,
    ComparatorComponent,
    UserprofileComponent,
    WebviewsComponent,
    ComparatorMenuComponent,
    DatasetViewComponent,
  ],
  exports: [
    LandingPageComponent,
    PagesComponent,
    AccountSettingsComponent,
    AppsComponent,
    ApisComponent,
    PurposesComponent,
    PiscopesComponent,
    RolesComponent,
    AppViewComponent,
    ApiViewComponent,
    PurposeViewComponent,
    DashboardsComponent,
    UserprofileComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    //ComponentsModule,
    HttpClientModule,
    MonacoEditorModule
  ]
})
export class PagesModule { }
