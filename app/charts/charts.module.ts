import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2HighchartsModule } from 'ng2-highcharts';

import { HighchartExamplesComponent }   from './highchart-examples.component';

@NgModule({
    imports: [CommonModule, Ng2HighchartsModule],
    exports: [HighchartExamplesComponent],
    declarations: [HighchartExamplesComponent],
    providers: [],
})
export class MlHighchartsModule { }
