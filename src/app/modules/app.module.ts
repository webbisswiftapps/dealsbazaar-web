import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MDesignModule} from './mdesign/mdesign.module';
import { SlickModule } from 'ngx-slick';


// Import HttpClientModule from @angular/common/http
import {HttpClientModule} from '@angular/common/http';
import 'hammerjs';




//import all components
import { AppComponent } from '../components/app-root/app.component';
import { AppHeaderComponent } from '../components/app-header/appheader.component';
import { AppFooterComponent } from '../components/app-footer/appfooter.component';
import { AppSliderComponent } from '../components/app-slider/appslider.component';
import { AppCategorySidenav } from '../components/app-catsidenav-sm/appcatsidenav.component';
import { CatNavDemoComponent } from '../components/app-catsidenav-lg/catnavdemo.component';
import { CatMenuRootComponent } from '../components/app-catsidenav-sm/catmenuroot/catmenuroot.component';
import { SideMenuComponent } from '../components/app-catsidenav-lg/sidemenu/sidemenu.component';
import { CollapsibleItem } from '../components/common/collapsible-item/collapsibleitem.component';
import { ProductItemComponent } from '../components/productdisplay/app-product-item/productitem.component';
import { ProductSectionComponent } from '../components/productdisplay/app-product-section/productsection.component';
import { DealsListComponent} from '../components/productdisplay/app-deals-list/dealslist.component';

//services
import { StoreService } from '../services/validstore-service/validstore.service';
import { CategoriesService } from '../services/categories-service/categories.service';

// RECOMMENDED (doesn't work with system.js)
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';




@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppSliderComponent,
    AppCategorySidenav,
    CatNavDemoComponent,
    CatMenuRootComponent,
    SideMenuComponent,
    CollapsibleItem,
    ProductItemComponent,
    ProductSectionComponent,
    DealsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDesignModule, //add material design module (Custom module)
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    SlickModule.forRoot()
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
