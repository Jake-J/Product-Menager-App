import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product';
import { ProductsStoreService } from '../services/products-store.service';
import { MessageService } from '../services/message.service';
import { Distributor } from '../distributor';
import { DistributorsService } from '../services/distributors.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productsService: ProductsStoreService,
              private httpClient:HttpClient,
              private messageService: MessageService,
              private distService: DistributorsService){};


  productDetails: Product = {
    id:null,
    price:null,
    name:null,
    distributor:null
  }

  editingProduct = {
    name: null,
    price: null
  };

  productsList: Product[];
  showProductsList: Product [];
  addingNew: boolean;
  editRow: number;
  searchName: string;
  validationMessages: string[] =  [];
  display: boolean = false;
  distributors: Distributor[];
  selectedDist: Distributor;

  showDialog() {
      this.display = true;
  }


 setProductDetails(id,name,price,distributor){
    this.productDetails = {
      id: id,
      name:name,
      price:price,
      distributor:distributor
    }
    this.showDialog();
 }

  toggleAddingInputs():void{
    
    this.addingNew === true ? this.addingNew = false : this.addingNew = true;
    
  }

  toggleEditMode(prodId):void{
    !this.editRow ? this.editRow = parseInt(prodId.innerHTML) : this.editRow = null;

  }

  searchFor():void{

    const prodList = this.productsList,
          filter = prodList.filter((product)=> {return product.name.indexOf(this.searchName) >= 0});
          //filter = prodList.filter((product)=> {return product.name.indexOf(e) >= 0});
    
    this.showProductsList = filter;       

  }

  sortData(ascending: boolean,sortBy: string): void{
    if(sortBy !== 'name'){
        ascending ? 
        this.showProductsList.sort((a, b) => b[sortBy]-a[sortBy]) :
        this.showProductsList.sort((a, b) => a[sortBy]-b[sortBy]);
    }else{
        ascending ?
        this.showProductsList.sort((a, b) => (a[sortBy] > b[sortBy]) ? -1 : ((b[sortBy] > a[sortBy]) ? 1 : 0)) :
        this.showProductsList.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : ((b[sortBy] > a[sortBy]) ? -1 : 0));
    }
  }

  getAllProducts(): void {
    this.productsService.getAllProducts().subscribe(
      data => {
        this.productsList = data;
        this.showProductsList = this.productsList;
        this.messageService.add(`product data fetched at ${this.formatDate(new Date())}`);
      }
    );
  }
  getDistributors():void{
    this.distService.getAllDistributors().subscribe(data=>this.distributors = data)
  }
  
  addNewProduct(productName,productPrice) : void {
    this.productsService.addNewProduct(productName.value,productPrice.value,this.selectedDist).subscribe(data => {
      this.productsList.push(data);
      if(this.searchName) {this.searchFor()};
      this.toggleAddingInputs();
      this.messageService.add(`product ${data.name} with price ${data.price}$ at ${this.formatDate(new Date())}`);
      if(this.validationMessages.length>0){this.validationMessages = [];}
    },
    err => this.handleBadRequest(err));
    
  }

  editExistingProduct(productId) :void{

    const prodList = this.productsList;
    function findDist(id){
      for (const item of prodList) {
        if(id == item.id) {return item.distributor};
      }
    }
        
    this.productsService.
    editExistingProduct(productId.innerHTML,this.editingProduct.name,this.editingProduct.price,findDist(productId.innerHTML)).
    subscribe(data=>{
      for(let product of prodList){
        if(product.id == data.id){
          product.name = data.name;
          product.price = data.price;
        }
      }
      if(this.validationMessages.length>0){this.validationMessages = [];}
      this.messageService.add(`product with id=${data.id} changed name into ${data.name} and price to ${data.price}$ at ${this.formatDate(new Date())}`);
    },
    err => this.handleBadRequest(err));

    this.toggleEditMode(null);
  }

  deleteProduct(id,):void{

    const prodList = this.productsList,
          idVal = id.innerHTML;


    this.productsService.deleteProduct(idVal).subscribe(
    data =>{
      prodList.splice(findElementById(prodList,data.id),1);
      if(this.searchName){this.searchFor();}
      else{this.showProductsList = this.productsList;}
      
      this.messageService.add(`product with id=${idVal} deleted at ${this.formatDate(new Date())}`);
    }
  );

    function findElementById(list,id){
      
      for (const product of list) {
        if(product.id == id){
          return list.indexOf(product);
        }
      }

    }

  }

  ngOnInit() {
    this.getAllProducts();
    this.getDistributors();
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

  handleBadRequest(err){
    for(let errorMessage of err.error){
      this.validationMessages.push(errorMessage.message);
    }
  }

}
