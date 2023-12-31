import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

interface User {
  id: number;
  username: string;
  password: string;
  paid: boolean;
  isAdmin: boolean;
}

interface Customer {
  id: number;
  name: string;
  paid: boolean;
}

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.page.html',
  styleUrls: ['./client-list.page.scss'],
})
export class ClientListPage implements OnInit {
  customers: Customer[] = [];

  constructor(public navCtrl: NavController) {}

  ngOnInit() {
    fetch('https://api-cobranca-unisinos.onrender.com/users')
      .then((response) => response.json())
      .then(
        (data: User[]) =>
          (this.customers = data.map((user: User) => ({
            id: user.id,
            name: user.username,
            paid: user.paid,
          })))
      )
      .catch((error) => console.error('Erro:', error));

    fetch('https://api-cobranca-unisinos.onrender.com/users');
  }

  deleteCustomer(id: number) {
    fetch(`https://api-cobranca-unisinos.onrender.com/users/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na requisição HTTP: ' + response.status);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Cliente excluído:', data);
        this.customers = this.customers.filter(
          (customer) => customer.id !== id
        );
      })
      .catch((error) => console.error('Erro:', error));
  }
}
