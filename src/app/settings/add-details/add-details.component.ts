import { Component, OnInit } from '@angular/core';
import { addDetailsRoutesNames } from './add-details.routes.names';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css'],
})
export class AddDetailsComponent implements OnInit {
  choosePlanLink = './' + addDetailsRoutesNames.CHOOSE_PLAN;
  chooseAddressLink = './' + addDetailsRoutesNames.CHOOSE_ADDRESS;

  constructor() {}

  ngOnInit() {}
}
