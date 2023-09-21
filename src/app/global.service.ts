import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  public globalVariable: any;

  constructor() {
    this.globalVariable = null;
  }

  setGlobalVariable(value: any) {
    this.globalVariable = value;
  }

  getGlobalVariable() {
    return this.globalVariable;
  }
}
