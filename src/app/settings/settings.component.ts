import { Component, OnInit } from '@angular/core';
import { settingsRoutesNames } from './settings.routes.names';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  updateDetailsLink = './' + settingsRoutesNames.UPDATE_DETAILS;
  addDetailsLink = './' + settingsRoutesNames.ADD_DETAILS;

  constructor() {}

  ngOnInit() {}
}
