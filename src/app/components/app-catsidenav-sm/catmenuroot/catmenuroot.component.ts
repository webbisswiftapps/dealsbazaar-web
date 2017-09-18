import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CategoriesService } from '../../../services/categories-service/categories.service';

import { Category } from '../../../models/category';

@Component({
    'selector':"db-catmenu-root",
    'templateUrl':'./catmenuroot.component.html',
    'styleUrls':['./catmenuroot.component.css'],
    'providers':[CategoriesService]
})

export class CatMenuRootComponent{


    @Input() categoryid:string;

    progress = false;
    categories:Category[];
    constructor(
        private categoryService:CategoriesService,
    ){}


    ngOnInit(){
      this.loadCategories();
    }

    loadCategories(){
        this.progress = true;
        this.categoryService.load(this.categoryid)
        .subscribe(
            (categories)=>{
                this.progress = false;
                this.categories = categories;
            }
        );  
    }

}