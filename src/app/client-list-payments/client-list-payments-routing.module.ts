import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientListPaymentPage } from './client-list-payments.page';

const routes: Routes = [
  {
    path: '',
    component: ClientListPaymentPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientListPageRoutingModule {}
