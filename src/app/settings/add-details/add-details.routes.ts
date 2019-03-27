import { AddDetailsComponent } from './add-details.component';
import { CHOOSE_ADDRESS_ROUTES } from './choose-address/choose-address.routes';
import { addDetailsRoutesNames } from './add-details.routes.names';
import { appRoutesNames } from 'app/app.routes.names';

export const ADD_DETAILS_ROUTES = [
  { path: '', component: AddDetailsComponent },
  {
    path: addDetailsRoutesNames.CHOOSE_ADDRESS,
    children: CHOOSE_ADDRESS_ROUTES,
  },
  {
    path: addDetailsRoutesNames.CHOOSE_PLAN,
    loadChildren: './choose-plan/choose-plan.module#ChoosePlanModule',
  },
];
