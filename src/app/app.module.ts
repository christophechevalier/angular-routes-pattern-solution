import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { APP_BASE_HREF } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { SettingsModule } from './settings/settings.module';

import { APP_ROUTES } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SettingsModule,
    RouterModule.forRoot(APP_ROUTES),
    // you do this ^ once, for the app module
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '' }],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
