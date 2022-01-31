import { Component, OnInit } from '@angular/core';
import { ManageFacade } from '@my-project/checkin/domain';

@Component({
  selector: 'checkin-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
})
export class ManageComponent implements OnInit {
  constructor(private manageFacade: ManageFacade) {}

  ngOnInit() {}
}
