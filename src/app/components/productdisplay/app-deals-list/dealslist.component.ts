import { Component, Input, OnInit } from '@angular/core';

//model import
import { Section } from '../../../models/section';

//service import 
import { DealsService } from '../../../services/deals-service/deals.service';
import { StoreService } from '../../../services/validstore-service/validstore.service';



@Component({
    selector: 'db-deals-list',
    template: `

    <db-product-section *ngFor="let section of sections" [section]="section"></db-product-section>
    <md-progress-spinner *ngIf="progress" class="deals_progress" [color]="color" [mode]="mode"></md-progress-spinner>
    `,
    'styleUrls':['dealslist.component.css']
    ,
    'providers':[DealsService]
  })
  export class DealsListComponent implements OnInit{

    sections:Section[] = [];
    progress = true;
    color = 'warn';
    mode = 'indeterminate';

    constructor(private storeService:StoreService, private dealsService:DealsService){}

    ngOnInit(){
        this.loadAllDeals();
      }
  
    loadAllDeals(){
        this.progress = true;
        this.storeService.getStores()
        .mergeMap(store => this.dealsService.loadDeals(store.obj))
        .filter((section:Section) => section.count > 0)
        .subscribe(
            section=>{
                console.log("Deals | added: "+section);
                this.sections.push(section);
            },
            err=>{
                console.log(err);
                this.progress = false;
            },
            ()=>{
                this.progress = false;
            }
        );
    }

  }