import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';
import { SeriesComponent } from './series/series.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SeriesComponent
  ],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    ReactiveFormsModule
  ]
})
export class SeriesModule { }
