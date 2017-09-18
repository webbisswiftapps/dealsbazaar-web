import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CategoriesService } from '../../../services/categories-service/categories.service';

import { Category } from '../../../models/category';

@Component({
    'selector':"db-sidemenu",
    'templateUrl':'./sidemenu.component.html',
    'styleUrls':['./sidemenu.component.css'],
    'providers':[CategoriesService]
})

export class SideMenuComponent{


    @Input() categoryid:string;
    color = 'warn';
    mode = 'indeterminate';

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