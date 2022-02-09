import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Projects',
      role: ['full-access'],
      icono: 'mdi mdi-projector',
      submenu: [
        { titulo: 'whatsapp', url: '/Smart4P/dashboard', role: ['full-access'] },
        { titulo: 'haac', url: 'PRO/dashboard', role: ['full-access'] },
      ]
    },
    {
      titulo: 'Dashboards',
      icono: 'mdi mdi-view-dashboard',
      role: ['full-access'],
      submenu: [
        { titulo: 'Main', url: '/Smart4P/dashboard', role: ['full-access'] },
        { titulo: 'PRO', url: 'PRO/dashboard', role: ['full-access'] },
        { titulo: 'PRE', url: 'PRE/dashboard', role: ['es-pre'] },
        { titulo: 'CERT', url: 'CERT/dashboard', role: ['es-pre']}
      ]
    },
    {
      titulo: 'PRO',
      icono: 'mdi mdi-earth',
      role: ['full-access'],
      submenu: [
        { titulo: 'Dashboard', url: 'PRO/dashboard', role:['es-pre']},
        { titulo: 'Apps', url: 'PRO/apps', role:['es-pre']},
        { titulo: 'Apis', url: 'PRO/apis', role:['es-pre'] },
        { titulo: 'PI-Scopes', url: 'PRO/pi-scopes', role:['es-pre'] },
        { titulo: 'Purposes', url: 'PRO/purposes', role:['es-pre'] },
        { titulo: 'Roles', url: 'PRO/roles', role:['es-pre'] },
        { titulo: 'Datasets', url: 'PRO/datasets', role:['es-pre']},
        { titulo: 'Webviews', url: 'PRO/webviews', role:['es-pre']},
      ]
    },
    {
      titulo: 'PRE',
      icono: 'mdi mdi-certificate',
      role: ['es-pre'],
      submenu: [
        { titulo: 'Dashboard', url: 'PRE/dashboard', role:['es-pre']},
        { titulo: 'Apps', url: 'PRE/apps', role:['es-pre']},
        { titulo: 'Apis', url: 'PRE/apis', role:['es-pre']},
        { titulo: 'PI-Scopes', url: 'PRE/pi-scopes', role:['es-pre']},
        { titulo: 'Purposes', url: 'PRE/purposes', role:['es-pre']},
        { titulo: 'Roles', url: 'PRE/roles', role:['es-pre']},
        { titulo: 'Datasets', url: 'PRE/datasets', role:['es-pre']},
        { titulo: 'Webviews', url: 'PRE/webviews', role:['es-pre']},
      ]
    },
    {
      titulo: 'CERT',
      icono: 'mdi mdi-json',
      role: ['es-pre'],
      submenu: [
        { titulo: 'Dashboard', url: 'CERT/dashboard', role: ['es-pre']},
        { titulo: 'Apps', url: 'CERT/apps', role: ['es-pre']},
        { titulo: 'Apis', url: 'CERT/apis', role: ['es-pre'] },
        { titulo: 'PI-Scopes', url: 'CERT/pi-scopes', role: ['es-pre'] },
        { titulo: 'Purposes', url: 'CERT/purposes', role: ['es-pre'] },
        { titulo: 'Roles', url: 'CERT/roles', role: ['es-pre'] },
        { titulo: 'Datasets', url: 'CERT/datasets', role: ['es-pre']},
      ]
    },    
    {
      titulo: 'Tools',
      icono: 'mdi mdi-yelp',
      role: ['full-access', 'user-profile'],
      submenu : [
        { titulo: 'Azure Subscriptions Costs - Comming soon', url: '', role: ['full-access']},
        { titulo: 'Map it', url: '/Smart4P/mapit', role: ['full-access']},
        { titulo: 'Comparator - Beta', url: '/Smart4P/comparator', role: ['full-access']},
        { titulo: 'User profile', url: '/Smart4P/user-profile', role:['user-profile']},
      ]
    },
    {
      titulo: 'Links',
      icono: 'mdi mdi-link',
      role: ['es-pre'],
      submenu: [
        { titulo: '4P community QnA blog', url: 'https://qna.baikalplatform.com/', role: ['es-pre']},
        { titulo: 'Certification Portal', url: 'https://www.es-cert.baikalplatform.com/login', role: ['es-pre']},
        { titulo: 'Developers Portal', url: 'https://developers.baikalplatform.com/', role: ['es-pre']},
        { titulo: 'Preproduction Portal', url: 'https://www.es-pre.baikalplatform.com/login', role: ['es-pre'] },
        { titulo: 'Production Portal', url: 'https://www.es-pro.baikalplatform.com/login', role: ['es-pre']},
      ]
    }
  ];

  constructor() { }
}
