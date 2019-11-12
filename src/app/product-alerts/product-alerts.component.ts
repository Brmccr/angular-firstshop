import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
// output event emitter is being user to push through our notify
// me button 
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
  
  export class ProductAlertsComponent implements OnInit {
  @Input() product;
  // added the output here and the eventemitter to be used with the notify me
  // button 
  @Output() notify = new EventEmitter();
  constructor() { }

  
  ngOnInit() {
  }

}