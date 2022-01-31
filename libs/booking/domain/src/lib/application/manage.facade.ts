import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Tickets } from '../entities/tickets';
import { TicketsDataService } from '../infrastructure/tickets.data.service';

@Injectable({ providedIn: 'root' })
export class ManageFacade {
  private ticketsListSubject = new BehaviorSubject<Tickets[]>([]);
  ticketsList$ = this.ticketsListSubject.asObservable();

  constructor(private ticketsDataService: TicketsDataService) {}

  load(): void {
    this.ticketsDataService.load().subscribe({
      next: (ticketsList) => {
        this.ticketsListSubject.next(ticketsList);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
