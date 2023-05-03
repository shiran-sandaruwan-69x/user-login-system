import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    //load all product
    this.loadAllCustomer();
  }

  private loadAllCustomer(){
  this.productService.getAllProduct().subscribe(response=>{
    console.log(response);
  },error => {
    console.log(error);
  });
  }

}
