import { Component, OnInit } from '@angular/core';

//Provides access to information about a route associated with a component that is loaded in an outlet
import { ActivatedRoute } from '@angular/router';


// importing products - will get the products array
import { products } from '../products';

import { CartService } from '../cart.service';
//importing the card service into the product-details component that we navigate to
// will utilize cart service on the product details page through router. 

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  //  product;
   addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

  //adding the addToCart functionality to our product details component. 

   //defining the product property 

  //injecting the activated route into the constructor 
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    //injecting the cartService into productDetails
  ) { }


//subscribing to route params and getting the product based off of
    // productId
    // is working off of the private route, ActivatedRoute
  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('productId')];
  });

  //Angular calls ngOnInit() shortly after creating a component.

//The route parameters correspond to the path variables defined in the route. The productId is provided from the URL that was matched to the route. You use the productId to display the details for each unique product.

}
}