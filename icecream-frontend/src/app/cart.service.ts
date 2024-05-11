import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  selectedItems: any[] = [];

  constructor() { }

  addItem(item: any) {
    this.selectedItems.push(item);
  }

  removeItem(item: any) {
    const index = this.selectedItems.indexOf(item);
    if (index !== -1) {
      this.selectedItems.splice(index, 1);
    }
  }

  getSelectedItems() {
    return this.selectedItems;
  }
}
