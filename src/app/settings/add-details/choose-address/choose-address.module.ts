import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseAddressComponent } from './choose-address.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ChooseAddressComponent],
})
export class ChooseAddressModule {}
