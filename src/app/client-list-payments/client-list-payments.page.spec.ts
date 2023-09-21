import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientListPaymentPage } from './client-list-payments.page';

describe('ClientListPage', () => {
  let component: ClientListPaymentPage;
  let fixture: ComponentFixture<ClientListPaymentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClientListPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
