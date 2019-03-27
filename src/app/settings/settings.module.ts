import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { RouterModule } from '@angular/router';

import { UpdateDetailsModule } from './update-details/update-details.module';
import { AddDetailsModule } from './add-details/add-details.module';

@NgModule({
  imports: [
    CommonModule,
    UpdateDetailsModule,
    AddDetailsModule,
    RouterModule, // <-- Only add the RouterModule
    // if you need to use router-outlet / routerLink
  ],
  declarations: [SettingsComponent],
})
export class SettingsModule {}
