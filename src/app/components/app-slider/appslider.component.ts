import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { FeaturedSlideService } from '../../services/slide-service/featured-slide.service';
import { StoreService } from '../../services/validstore-service/validstore.service';

//Model Import
import { FeaturedSlide } from '../../models/featured-slide'; 
import { Store } from '../../models/valid-store';

import { Observable } from 'rxjs/Rx';


@Component({
    'selector':"db-app-slider",
    'templateUrl':'./appslider.component.html',
    'styleUrls':['./appslider.component.css'],
    'providers':[FeaturedSlideService]
})

export class AppSliderComponent implements OnInit{

    visible = false;
    progress = false;
    slideLoadError = false;

    public myInterval: number = 3000;
    public slides: FeaturedSlide[] = [];
    public activeSlideIndex: number = 0;
    public noWrapSlides:boolean = false;

    color = 'warn';
    mode = 'indeterminate';

    constructor(
        private slideService:FeaturedSlideService,
        private storeService:StoreService
    ){}


    ngOnInit(){
      this.loadAllSlides();
    }



    loadAllSlides(){
        this.progress = true;
        this.storeService.getStores()
        .mergeMap(store => this.slideService.loadSlides(store.obj))
        .subscribe(
            new_slides=>{
                this.visible = true;
                this.slides.push(...new_slides);
            },
            err=>{
                console.log(err);
                this.progress = false;
                this.slideLoadError = true;
            },
            ()=>{
                this.progress = false;
            }
        );
    }
  

  
     
    public removeSlide(index?: number): void {
        const toRemove = index ? index : this.activeSlideIndex;
        this.slides.splice(toRemove, 1);
    }

}