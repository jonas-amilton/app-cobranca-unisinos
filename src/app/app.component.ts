import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: '/login', icon: 'log-in' },
    { title: 'Cadastro de usuários', url: '/register', icon: 'person-add' },
    { title: 'Lista de Clientes', url: '/client-list', icon: 'list' },
    { title: 'Pagamento', url: '/payment', icon: 'card' },
  ];
  constructor() {}
}
