import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsStoreService } from '../services/products-store.service';
import { Distributor } from '../distributor';
import { DistributorsService } from '../services/distributors.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  products: Product[];
  distributors: Distributor[];
 
  constructor(private productService: ProductsStoreService,private distributorService: DistributorsService) { }
 
  ngOnInit() {
    this.getProducts();
    this.getDistributors();
  }
 
  getProducts(): void {
    this.productService.getAllProducts()
      .subscribe(products => this.products = products.slice(0, 4));
  }
  getDistributors(): void {
    this.distributorService.getAllDistributors()
      .subscribe(distributors => this.distributors = distributors.slice(0,4))
  }
}