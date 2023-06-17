import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleAccomodationComponent } from './single-accomodation.component';

const routes: Routes = [{ path: '', component: SingleAccomodationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleAccomodationRoutingModule { }
