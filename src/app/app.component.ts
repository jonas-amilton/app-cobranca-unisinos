import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: '/login', icon: 'log-in' },
    { title: 'Cadastro de usuários', url: '/#', icon: 'person-add' },
    { title: 'Lista de Clientes', url: '/#', icon: 'list' },
    { title: 'Pagamento', url: '/#', icon: 'card' },
    { title: 'Trash', url: '/#', icon: 'trash' },
    { title: 'Spam', url: '/#', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
