import { Component, Input, ViewChild } from '@angular/core';

@Component({
    'selector':"db-catnav-demo",
    'templateUrl':'./catnavdemo.component.html',
    'styleUrls':['./catnavdemo.component.css'],
})

export class CatNavDemoComponent{

  
  
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

    categoryIcons =[
        "../../../assets/images/category_icons/grid_men.png",
        "../../../assets/images/category_icons/grid_women.png",
        "../../../assets/images/category_icons/grid_mobile.png",
        "../../../assets/images/category_icons/grid_laptop.png",
        "../../../assets/images/category_icons/grid_tv.png",
        "../../../assets/images/category_icons/grid_camera.png",
        "../../../assets/images/category_icons/grid_fridge.png",
        "../../../assets/images/category_icons/grid_other.png",
        
    ]

}