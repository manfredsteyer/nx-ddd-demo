import { Component, OnInit } from '@angular/core';
import { ManageFacade } from '@my-project/booking/domain';

@Component({
  selector: 'booking-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
})
export class ManageComponent implements OnInit {
  ticketsList$ = this.manageFacade.ticketsList$;

  constructor(private manageFacade: ManageFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.manageFacade.load();
  }
}
