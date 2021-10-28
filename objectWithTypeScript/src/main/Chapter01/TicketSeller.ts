import { TicketOffice } from './TicketOffice';
import { Audience } from './Audience';
import { Ticket } from './Ticket';

export class TicketSeller {
  private _ticketOffice: TicketOffice;

  constructor(ticketOffice: TicketOffice) {
    this._ticketOffice = ticketOffice;
  }

  sellTo(audience: Audience): void {
    const ticket: Ticket = this._ticketOffice.ticket;
    this._ticketOffice.plusAmount(audience.buy(ticket));
  }
}
