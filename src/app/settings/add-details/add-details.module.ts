import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDetailsComponent } from './add-details.component';
import { ChooseAddressModule } from './choose-address/choose-address.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ChooseAddressModule,
    RouterModule, // <-- Again, only add the RouterModule
    // if you need to use router-outlet / routerLink
  ],
  declarations: [AddDetailsComponent],
})
export class AddDetailsModule {}
