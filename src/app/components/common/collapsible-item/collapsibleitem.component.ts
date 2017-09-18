import { Component, Input, ViewChild } from '@angular/core';

@Component({
    'selector':"db-collapsible",
    'templateUrl':'./collapsibleitem.component.html',
    'styleUrls':['./collapsibleitem.component.css'],
})

export class CollapsibleItem{

    @Input() title:string;
    
    public isCollapsed:boolean = true;
    
     public collapsed(event:any):void {
       console.log(event);
     }
    
     public expanded(event:any):void {
       console.log(event);
     }
}