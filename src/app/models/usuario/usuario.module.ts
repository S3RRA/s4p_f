export class UsuarioModel {

  email!: string;
  password!: string;
  permissions?: {
    ADMIN: 1|0,
    NOTIF: 1|0,
    PROD: 1|0,
    PREP: 1|0,
    UP: 1|0
  }

}

