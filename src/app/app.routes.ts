import { SETTINGS_ROUTES } from './settings/settings.routes';
import { appRoutesNames } from './app.routes.names';

export const APP_ROUTES = [
  { path: appRoutesNames.SETTINGS, children: SETTINGS_ROUTES }, 
];
