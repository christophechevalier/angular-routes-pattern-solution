import { Component } from '@angular/core';
import { appRoutesNames } from './app.routes.names';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  settingsLink = './' + appRoutesNames.SETTINGS;
}
