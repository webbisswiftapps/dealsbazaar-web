import { Component, Input, ViewChild } from '@angular/core';

@Component({
    'selector':"db-cat-sidenav",
    'templateUrl':'./appcatsidenav.component.html',
    'styleUrls':['./appcatsidenav.component.css'],
})

export class AppCategorySidenav{

  
    categories = [
        "vc_mens",
        "vc_womens",
        "vc_mobiles_tablets",
        "vc_computer",
        "vc_entertainment",
        "vc_camera",
        "vc_home_kitchen",
        "vc_other"
    ];
    categoryLabels = [ 
        "Men's Fashion",
        "Women's Fashion",
        "Mobiles & Tablets",
        "Computers & Accessories",
        "TV & Entertainment",
        "Camera & Accesories",
        "Home & Kitchen",
        "Other"
    ];

    public isCollapsed: boolean = true;
    
    toggleCollapse(): void {
      this.isCollapsed = !this.isCollapsed;
    }
    
     public collapsed(event:any):void {
       console.log(event);
     }
    
     public expanded(event:any):void {
       console.log(event);
     }

}