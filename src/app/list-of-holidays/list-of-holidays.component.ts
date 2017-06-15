import { Component, OnInit } from '@angular/core';
import {ListofHolidays} from './holidays.service';
import {Holidays} from './holidays.service';
@Component({
  selector: 'app-list-of-holidays',
  template:  '<h1>{{errormsg}}</h1> <ul *ngFor ="let holiday of Holidays"><li>hi</li></ul>',

})

export class ListOfHolidaysComponent implements OnInit {
   holiday : Holidays[];
    errormsg: string;
  constructor(private _holidayservice: ListofHolidays) { }

  ngOnInit() {
this._holidayservice.getListofHolidays()
.subscribe(holidaydata => this.holiday = holidaydata,
holidayerr=> this.errormsg=holidayerr);
  }

}
