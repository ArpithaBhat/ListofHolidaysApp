import { Component } from '@angular/core';
import { enableProdMode }    from '@angular/core';
import { Http } from '@angular/http';
import {ListofHolidays} from './list-of-holidays/holidays.service';
enableProdMode();


@Component({
  selector: 'app-root',
  template:'<h1>List of Holidays</h1><app-list-of-holidays></app-list-of-holidays>',
  providers:[ListofHolidays]         

 
})
export class AppComponent {
  
  
    
  }

