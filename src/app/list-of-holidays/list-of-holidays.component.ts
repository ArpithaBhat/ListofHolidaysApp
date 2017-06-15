import { Component, OnInit } from '@angular/core';
import {ListofHolidays} from './holidays.service';

@Component({
  selector: 'app-list-of-holidays',
  template:  '<p>Output: {{holiday}}</p>',
 //template:'<li Holidays:{{}}></li>',
  providers:[ListofHolidays] 
})

export class ListOfHolidaysComponent implements OnInit {
   holiday :string;
    errormsg: string;

  constructor(private _holidayservice: ListofHolidays) { }

  ngOnInit() {
this._holidayservice.getListofHolidays()
.subscribe(holidaydata => this.holiday = JSON.stringify(holidaydata),
holidayerr=> this.errormsg=holidayerr);
  }

}
