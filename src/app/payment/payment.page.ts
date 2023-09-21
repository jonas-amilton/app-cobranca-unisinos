import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  user = this.globalService.getGlobalVariable();

  constructor(private globalService: GlobalService) {}

  ngOnInit() {}

  payBill() {
    const userId = this.user.id;
    fetch(`https://api-cobranca-unisinos.onrender.com/users/${userId}/pay`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ paid: true }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        this.globalService.setGlobalVariable(data);
      })
      .catch((error) => {
        console.error('Erro:', error);
      });
  }
}
