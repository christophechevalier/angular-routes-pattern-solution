import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CHOOSE_PLAN_ROUTES } from './choose-plan.routes';
import { ChoosePlanComponent } from './choose-plan.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CHOOSE_PLAN_ROUTES),
    // That's the one thing we needed to change
    // Adding the forChild and the loadChildren
    // to make it lazy loaded
  ],
  declarations: [ChoosePlanComponent],
})
export class ChoosePlanModule {}
