import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { SingleAccomodationRoutingModule } from './single-accomodation-routing.module';
import { SingleAccomodationComponent } from './single-accomodation.component';


@NgModule({
  declarations: [
    SingleAccomodationComponent
  ],
  imports: [
    CommonModule,
    SingleAccomodationRoutingModule,
    FormsModule,
  ]
})
export class SingleAccomodationModule { }
