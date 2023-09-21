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
  templateUrl: './client-list-payments.page.html',
  styleUrls: ['./client-list-payments.page.scss'],
})
export class ClientListPaymentPage implements OnInit {
  customers: Customer[] = [];

  constructor(public navCtrl: NavController) {}

  ngOnInit() {
    fetch('https://api-cobranca-unisinos.onrender.com/users')
      .then((response) => response.json())
      .then(
        (data: User[]) =>
          (this.customers = data.filter((user) => !user.isAdmin) .map((user: User) => ({
            id: user.id,
            name: user.username,
            paid: user.paid,
          })))
      )
      .catch((error) => console.error('Erro:', error));
  }

  deleteCustomer(id: number) {
    this.customers = this.customers.filter((customer) => customer.id !== id);
    console.log('Cliente excluído:', id);
  }
}
