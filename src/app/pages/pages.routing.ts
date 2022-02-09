import { Routes, RouterModule, CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../guards/auth.guard';
//Pages
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PurposesComponent } from './purposes/purposes.component';
import { PiscopesComponent } from './piscopes/piscopes.component';
import { RolesComponent } from './roles/roles.component';
import { ApisComponent } from './apis/apis.component';
import { AppsComponent } from './apps/apps.component';
import { DatasetsComponent } from './datasets/datasets.component';
import { WebviewsComponent } from './webviews/webviews.component';
//TOOLS
import { MapitComponent } from './tools/mapit/mapit.component';
import { UserprofileComponent } from './tools/userprofile/userprofile.component';
import { ComparatorComponent } from './tools/comparator/comparator.component';
import { DatasetViewComponent } from './dataset-view/dataset-view.component';
import { UsersComponent } from '../admin/users/users.component';
import { MapitMenuComponent } from './tools/mapit-menu/mapit-menu.component';
import { ComparatorMenuComponent } from './tools/comparator-menu/comparator-menu.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppViewComponent } from './app-view/app-view.component';
import { ApiViewComponent } from './api-view/api-view.component';
import { PurposeViewComponent } from './purpose-view/purpose-view.component';
import { DashboardsComponent } from './dashboards/dashboards.component';

const routes: Routes = [
    {
        path: 'Smart4P',
        component: PagesComponent,
        children : [
            { path: 'dashboard', component: LandingPageComponent, canActivate: [ AuthGuard ]},
            { path: 'account-settings', component: AccountSettingsComponent, canActivate: [ AuthGuard ] },
            //Pages
            { path: ':env/dashboard', component: DashboardsComponent, canActivate: [ AuthGuard ] },
            { path: ':env/apps', component: AppsComponent, canActivate: [ AuthGuard ] },
            { path: ':env/apps/:id', component: AppViewComponent, canActivate: [ AuthGuard ] },
            { path: ':env/apis', component: ApisComponent, canActivate: [ AuthGuard ] },
            { path: ':env/apis/:id', component: ApiViewComponent, canActivate: [ AuthGuard ] },
            { path: ':env/purposes', component: PurposesComponent, canActivate: [ AuthGuard ] },
            { path: ':env/purposes/:id', component: PurposeViewComponent, canActivate: [ AuthGuard ] },
            { path: ':env/pi-scopes', component: PiscopesComponent, canActivate: [ AuthGuard ] },
            { path: ':env/roles', component: RolesComponent, canActivate: [ AuthGuard ] },
            { path: ':env/datasets', component: DatasetsComponent, canActivate: [ AuthGuard ]},
            { path: ':env/datasets/:id', component: DatasetViewComponent, canActivate: [ AuthGuard ] },
            { path: ':env/webviews', component: WebviewsComponent, canActivate: [ AuthGuard ]},
            { path: 'admin', component: UsersComponent },
            //TOOLS
            { path: 'mapit', component: MapitMenuComponent, canActivate: [ AuthGuard ]},
            { path: 'mapit/:env/:type/:id', component: MapitComponent, canActivate: [ AuthGuard ]},
            { path: 'user-profile', component: UserprofileComponent, canActivate: [ AuthGuard ]},
            { path: 'comparator', component: ComparatorMenuComponent, canActivate: [ AuthGuard ]},
            { path: 'comparator/:type/:id', component: ComparatorComponent, canActivate: [ AuthGuard ]},
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}
