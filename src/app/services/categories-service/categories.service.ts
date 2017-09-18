import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Rx';


// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';


//Feature slide Response interface
import { Category } from '../../models/category';
import { CategoriesResponse } from '../../models/server-response/categories-response';

@Injectable()
export class CategoriesService {

  constructor(private client:HttpClient) { }


  load(key:string):Observable<Category[]>{
    console.log("Loading categories for <"+key+">....");
    var url = environment.apiUrl+"/json/"+key;
    console.log(url);
    return this.client.get<CategoriesResponse>(url)
            .map((response:CategoriesResponse) => response.categories)
            .catch((error:any) => Observable.throw(error || 'Server error'));
  }

   

  

}
