import { NgModule } from '@angular/core';
import {MdButtonModule, MdCheckboxModule, 
  MdToolbarModule, MdIconModule, 
  MdSidenavModule, MdListModule, MdAutocompleteModule, MdProgressSpinnerModule, MdCardModule} from '@angular/material';

@NgModule({
  imports: [MdButtonModule,MdAutocompleteModule, 
    MdCheckboxModule, MdToolbarModule, MdIconModule, MdSidenavModule, MdListModule,
  MdProgressSpinnerModule, MdCardModule],
  exports: [MdButtonModule,MdAutocompleteModule ,MdCheckboxModule, MdToolbarModule, MdIconModule,
     MdSidenavModule, MdListModule,
    MdProgressSpinnerModule, MdCardModule]
})

export class MDesignModule{}