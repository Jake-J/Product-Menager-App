import { Component, OnInit } from '@angular/core';
import { Distributor } from '../distributor';
import { DistributorsService} from '../services/distributors.service';
import { MessageService } from '../services/message.service';
import { Product } from '../product'
import { ProductsStoreService} from '../services/products-store.service';

@Component({
  selector: 'app-distributors',
  templateUrl: './distributors.component.html',
  styleUrls: ['./distributors.component.css']
})
export class DistributorsComponent implements OnInit {

  constructor(private distributorsService:DistributorsService,
              private messageService: MessageService,
              private productsService: ProductsStoreService
            ) { }

  distributors: Distributor[];
  displayAdding:boolean = false;
  errorMessage: string = "";
  products: Product[];
  distProduts: Product [];
  showProductsFor: number;

  toggleProducts(id){
    this.showProductsFor = this.showProductsFor !== id ? id : null;
  }

  toggleDialog() {
    this.displayAdding = !this.displayAdding;
  }

  addNewDist(id,name){
    this.distributorsService.addNewDistributor(id.value,name.value).subscribe(data=>{

     this.distributors.push(data)
     this.messageService.add(`distributor ${name.value} with id ${id.value} addded to list at ${this.formatDate(new Date())}`);
     this.toggleDialog();
    });
  }

  getAllDistributors(): void {
    this.distributorsService.getAllDistributors().subscribe(
      data => {
        this.distributors = data;
        this.messageService.add(`distributor data fetched at ${this.formatDate(new Date())}`);
      }
    );
  }
  getAllProducts(){
    this.productsService.getAllProducts().subscribe(data=>{this.products=data;console.log(this.products)});
  }

  removeDistributor(id,name): void{

    this.distributorsService.removeDistributor(id,name).subscribe(data=>{
      function findElementById(list){
      
        for (const item of list) {
          if(item.id == data.id){
            return list.indexOf(item);
          }
        }
  
      }
      this.distributors.splice(findElementById(this.distributors),1)
      this.errorMessage = "";
      this.messageService.add(`distributor ${name} with id ${id} deleted at ${this.formatDate(new Date())}`);
      },
      err => this.errorMessage = "Cannot delete distributor, which distributes products, you need to delete all products first."
    );

 
  }

  // addDistributor(id,name): void {
  //   this.distributorsService.addNewDistributor(id,name).subscribe(data =>{
  //     this.distributors.push(data);
      
  //   })
  // }

  ngOnInit() {

   this.getAllDistributors();
   this.getAllProducts();

  }

  formatDate(date){
    const monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    const day = date.getDate(),
          monthIndex = date.getMonth(),
          year = date.getFullYear();

    let hour = date.getHours(),
        minute = date.getMinutes();

    if(minute <10){minute = "0"+minute};
    if(hour < 10){hour = "0"+hour};
    return hour + ":" + minute + ' , ' + day + ' ' + monthNames[monthIndex] + ' ' + year;    

  }

}
