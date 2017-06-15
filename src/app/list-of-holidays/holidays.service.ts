import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class ListofHolidays{

      myHolidays : any={
    name: String,
    Date: String

  }
 constructor(private _http: Http) { }
  private _listofholidaysUrl :string = "https://holidayapi.com/v1/holidays?key=00eef410-6d1a-4a47-a7bb-34174392852c&country=US&year=2015"

  getListofHolidays(){
 //var json = JSON.stringify({key :'00eef410-6d1a-4a47-a7bb-34174392852c', country: 'USA',year: '2015'})
   return this._http.get(this._listofholidaysUrl)
    .map((respose:Response)=>respose.json())
     .catch(this._errorHandler);
    
   
  }
  _errorHandler(error: Response){
    console.error(error);
    return Observable.throw(error || "Server Error");
  }
}

