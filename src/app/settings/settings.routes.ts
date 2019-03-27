import { SettingsComponent } from './settings.component';
import { UPDATE_DETAILS_ROUTES } from './update-details/update-details.routes';
import { ADD_DETAILS_ROUTES } from './add-details/add-details.routes';
import { settingsRoutesNames } from './settings.routes.names';

export const SETTINGS_ROUTES = [
  { path: '', component: SettingsComponent },
  {
    path: settingsRoutesNames.UPDATE_DETAILS,
    children: UPDATE_DETAILS_ROUTES,
  },
  {
    path: settingsRoutesNames.ADD_DETAILS,
    children: ADD_DETAILS_ROUTES,
  },
];
