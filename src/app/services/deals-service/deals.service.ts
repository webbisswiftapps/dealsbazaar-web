import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Rx';


// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';


//Feature slide Response interface
import { Section } from '../../models/section';

@Injectable()
export class DealsService {

  constructor(private client:HttpClient) { }


  loadDeals(store:string):Observable<Section>{
    console.log("Loading deals for <"+store+">....");
    var url = environment.apiUrl+"/api/deals/"+store;
    console.log(url);
    return this.client.get<Section[]>(url)
            .flatMap((sections:Section[])=> Observable.from(sections))
  }

}
