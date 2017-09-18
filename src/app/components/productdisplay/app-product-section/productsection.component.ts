import { Component, Input } from '@angular/core';

//model import
import { Section } from '../../../models/section';
import { Product } from '../../../models/product';


@Component({
    selector: 'db-product-section',
    templateUrl: './productsection.component.html',
    styleUrls: ['./productsection.component.css']
  })
  export class ProductSectionComponent{
       @Input() section:Section;

      slideConfig = {
        slidesToShow: 6, 
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,

            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }]
      };
    

  }