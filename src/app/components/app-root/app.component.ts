import { Component , ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';


import { DealsService } from '../../services/deals-service/deals.service';
import  { Product } from '../../models/product';
import { Section } from '../../models/section';

@Component({
  selector: 'db-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(window:resize)': 'onWindowResize($event)'
  }
})
export class AppComponent{
  title:string="Deals बजार"
  @ViewChild("sidenav") sideNav: MdSidenav  

  mode = 'side';
  opened = false;

  constructor(){
    this.configureSideNav(); 
  }


  onWindowResize(event){
    this.configureSideNav(); 
  }

  configureSideNav(){
    var width = window.innerWidth;
    if( width < 1024){
      this.mode = 'over';
      this.opened = false;
    }else{ 
      this.mode = 'side';
      this.opened = true;
    }
  }


}
