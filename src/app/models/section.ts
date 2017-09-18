import { Product } from './product'

export class Section{
    count:number;
    listing_title:string;
    next_page:string;
    products:[Product];
    store:string;
    store_logo:string;
    store_path:string;
}