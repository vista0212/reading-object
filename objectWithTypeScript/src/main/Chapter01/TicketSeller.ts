import { TicketOffice } from './TicketOffice';
import { Audience } from './Audience';
import { Ticket } from './Ticket';

export class TicketSeller {
  private _ticketOffice: TicketOffice;

  constructor(ticketOffice: TicketOffice) {
    this._ticketOffice = ticketOffice;
  }

  sellTo(audience: Audience) {
    if (audience.bag.hasInvitation()) {
      const ticket: Ticket = this._ticketOffice.ticket;
      audience.bag.setTicket(ticket);
    } else {
      const ticket: Ticket = this._ticketOffice.ticket;
      audience.bag.minusAmount(ticket.fee);
      this._ticketOffice.plusAmount(ticket.fee);
      audience.bag.setTicket(ticket);
    }
  }
}
