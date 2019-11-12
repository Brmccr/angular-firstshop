import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts;
  constructor(
    private cartService: CartService
    ) { }
  //inject cart service into the shipping.component
  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
  //Set the shippingCosts property using the getShippingPrices() method from cart service.

}