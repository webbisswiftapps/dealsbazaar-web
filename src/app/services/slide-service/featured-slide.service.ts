import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Rx';


// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';


//Feature slide Response interface
import { FeaturedSlideResponse } from '../../models/server-response/featured-slide-response'
import { FeaturedSlide } from '../../models/featured-slide'

@Injectable()
export class FeaturedSlideService {

  constructor(private client:HttpClient) { }


  loadSlides(store:string):Observable<FeaturedSlide[]>{
    var url = environment.apiUrl+"/api/featured-offers/"+store;
    return this.client.get<FeaturedSlideResponse>(url)
            .map((response:FeaturedSlideResponse) => response.results)
            .catch((error:any) => Observable.throw(error || 'Server error'));
  }

}
