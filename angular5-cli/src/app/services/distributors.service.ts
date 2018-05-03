import { Injectable } from '@angular/core';
import { Distributor } from '../distributor';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class DistributorsService {

  constructor(private httpClient:HttpClient) { }

  webApiUrl: string = "/api/distributors";

  getAllDistributors(): Observable<Distributor[]> {

    return this.httpClient.get<Distributor[]>(this.webApiUrl);
  
  }

  addNewDistributor(id,name): Observable<any> {

    return this.httpClient.post(this.webApiUrl,{
      "id":id,
      "name":name
    })
  }

  // editExistingDistributor(id,name): Observable<any> {

  //   return this.httpClient.put(this.webApiUrl,{
  //     "id":id,
  //     "name":name
  //   });

  // }

  removeDistributor(id,name): Observable<any>{
    return this.httpClient.request('delete',this.webApiUrl,{body:{
      "id":id,
      "name":name
    }});
  }

}
