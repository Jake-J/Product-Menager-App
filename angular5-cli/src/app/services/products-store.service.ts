import { Injectable } from '@angular/core';
import { Product } from './../product';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class ProductsStoreService {

  // webApiGetUrl: string = 'http://localhost:4200/api/findall';
  // webApiPostUrl: string = 'http://localhost:4200/api/addByPost';
  // webApiPutUrl: string = 'http://localhost:4200/api/editByPut';
  // webApiDeleteBaseUrl: string = 'http://localhost:4200/api/delete/';
  webApiUrl: string = 'http://localhost:4200/api/products'
  constructor(private httpClient:HttpClient) { }

  

  getAllProducts(): Observable<Product[]> {

    return this.httpClient.get<Product[]>(this.webApiUrl);
  
  }
  addNewProduct(name,price,distributor): Observable<any> {
    console.log(distributor);
    return this.httpClient.post(this.webApiUrl,{
      "name":name,
      "price":price,
      "distributor":distributor
    })
  }

  editExistingProduct(id,name,price,distributor): Observable<any> {

    return this.httpClient.put(this.webApiUrl,{
      "id":id,
      "name":name,
      "price":price,
      "distributor":distributor
    });

  }

  deleteProduct(id): Observable<any>{

    return this.httpClient.request('delete',this.webApiUrl,{body:{
      "id":id
    }})

  }
}
