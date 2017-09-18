import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Rx';


// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';


//Feature slide Response interface
import { Store } from '../../models/valid-store'

@Injectable()
export class StoreService {

  constructor(private client:HttpClient) { }

   stores:Store[];

  getStores():Observable<Store>{
    console.log("Loading store info from webservice..");
    if(this.stores == null || this.stores.length < 0){
        var url = environment.apiUrl+"/api/stores";
        return this.client.get<Store[]>(url)
        .flatMap(stores => Observable.from(stores)) 
        .catch((error:any) => Observable.throw(error || 'Server error'));
    }else{
      console.log("Loading store info from in-memory cache..");      
       return Observable.from(this.stores);
    }
  }

}
