import { Component, Input } from '@angular/core';

//model import
import { Product } from '../../../models/product';


@Component({
    selector: 'db-product-item',
    templateUrl: './productitem.component.html',
    styleUrls: ['./productitem.component.css']
  })
  export class ProductItemComponent{
       @Input() product:Product;
  }