import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';
import { MlHighchartsModule } from './charts/charts.module';

import {HttpModule} from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, HttpModule, MlHighchartsModule ],
  declarations: [ AppComponent, ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
