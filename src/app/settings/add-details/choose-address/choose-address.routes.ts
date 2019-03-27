import { ChooseAddressComponent } from './choose-address.component';

export const CHOOSE_ADDRESS_ROUTES = [
  { path: '', component: ChooseAddressComponent },
  // see the above line ^,
  // notice how you don't need to write the whole url
  // see how we keep the same convention throughout the whole app
  // No matter if it's a lazy or an eager loaded module
];
