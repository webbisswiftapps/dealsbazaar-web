import { Component, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MdSidenav } from '@angular/material';
@Component({
    'selector':"db-app-header",
    'templateUrl':'./appheader.component.html',
    'styleUrls':['./appheader.component.css'],
})
export class AppHeaderComponent{

    optionsControl: FormControl;
    filteredOptions: any;
    options = ["Laptop","iPhone","Android Phone","Shirts","Lingerie"]

    @Input() title:string = '';


    constructor(){
        this.optionsControl = new FormControl();
        this.filteredOptions = this.optionsControl.valueChanges
            .startWith(null)
            .map(name => this.filterOptions(name))
    }

    filterOptions(val: string) {
        return val ? this.options.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
                   : this.options;
      }
    

}