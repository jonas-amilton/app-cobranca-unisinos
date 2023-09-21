import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientListPageRoutingModule } from './client-list-payments-routing.module';

import { ClientListPaymentPage } from './client-list-payments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientListPageRoutingModule,
  ],
  declarations: [ClientListPaymentPage],
})
export class ClientListPagePaymentModule {}
