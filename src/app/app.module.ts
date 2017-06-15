import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListOfHolidaysComponent } from './list-of-holidays/list-of-holidays.component';


@NgModule({
  declarations: [
    AppComponent,
    ListOfHolidaysComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
