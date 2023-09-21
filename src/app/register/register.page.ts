import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {
  user = {
    email: '',
    username: '',
    password: '',
    address: '',
    cpf: '',
    hydrometer: 0,
    paid: false,
    isAdmin: false,
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

  cadastrarUsuario(user:any) {
    fetch('https://api-cobranca-unisinos.onrender.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            this.router.navigate(['/client-list'])
          }
        })
        .catch((error) => {
          console.error('Erro:', error);
        });
  }

}
