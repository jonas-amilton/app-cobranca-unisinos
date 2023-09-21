import { Component } from '@angular/core';
import { GlobalService } from './global.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  globalVariable = {email: ''}
  public appPages = [{ title: 'Login', url: '/login', icon: 'log-in' }];
  constructor(private globalService: GlobalService,) {}
  onLogin(user: any) {
    this.globalVariable = this.globalService.globalVariable
    if (user.isAdmin) {
      this.appPages = [{ title: 'Login', url: '/login', icon: 'log-in' }];
      this.appPages.push(
        { title: 'Cadastro de Usuários', url: '/register', icon: 'person-add' },
        { title: 'Lista de Clientes', url: '/client-list', icon: 'list' },
        {
          title: 'Lista de pagamentos realizados',
          url: '/client-list-payments',
          icon: 'checkmark',
        }
      );
    } else {
      this.appPages = [{ title: 'Login', url: '/login', icon: 'log-in' }];
      this.appPages.push({ title: 'Pagamento', url: '/payment', icon: 'card' });
    }
  }
}
