import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//enabling http client for cart service 


// needs the provided in root section to be able to read it - 

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items = [];
  //items array will store the list of items in the cart
  constructor(
    private http: HttpClient
  ) {}
  // injecting HttpClient server 

  //adding the methods to add to card, get items, and clear cart. 
  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
  //this is a get method - Getting data back for shipping info- 
}
// export class CartService {
//   items = [];
//   //items array will store the list of items in the cart
//   // will be stored in an array. 
//   constructor() { }

// }