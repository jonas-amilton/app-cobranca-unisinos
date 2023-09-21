import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userDetails = {
    username: '',
    password: '',
  };

  sucesso: boolean = true;
  mensagem: string = 'Usuário ou senha inválidos!';

  constructor(
    private globalService: GlobalService,
    private appComponent: AppComponent,
    private router: Router
  ) {}

  ngOnInit() {}

  login() {
    fetch('https://api-cobranca-unisinos.onrender.com/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.userDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          this.globalService.setGlobalVariable(data.userInfo);
          this.appComponent.onLogin(data.userInfo);
          this.sucesso = true
          if (data.userInfo.isAdmin) {
            this.router.navigate(['/client-list'])
          } else {
            this.router.navigate(['/payment'])
          }
        } else {
          this.sucesso = false
        }
      })
      .catch((error) => {
        this.sucesso = false
        this.mensagem = error
        console.error('Erro:', error);
      });
  }
}
