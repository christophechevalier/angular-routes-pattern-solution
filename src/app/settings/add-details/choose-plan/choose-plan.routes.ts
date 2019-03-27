import { ChoosePlanComponent } from './choose-plan.component';

export const CHOOSE_PLAN_ROUTES = [
  { path: '', component: ChoosePlanComponent },
  // see the above line ^,
  // notice how we keep the same convention throughout the whole app
  // No matter if it's a lazy or an eager loaded module
];
