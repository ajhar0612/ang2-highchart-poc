import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartExamplesComponent }   from './highchart-examples.component';

import { Ng2HighchartsModule } from 'ng2-highcharts';

import {HttpModule} from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, Ng2HighchartsModule, HttpModule ],
  declarations: [ HighchartExamplesComponent],
  bootstrap:    [ HighchartExamplesComponent ]
})
export class AppModule { }
