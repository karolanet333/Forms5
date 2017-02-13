import { NgModule, LOCALE_ID }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
//import {HttpModule, JsonpModule} from '@angular/http';

import { AppComponent }  from './app.component';

import {LocationComponent} from './location/location'
//import {HttpAppComponent} from './data/http.app.component'



@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule//,
    //HttpModule,
    //JsonpModule
  ],
  declarations: [ 
    AppComponent,
    LocationComponent//,
    //HttpAppComponent
  ],
  bootstrap:    [ 
    AppComponent 
  ]
})
export class AppModule { }
