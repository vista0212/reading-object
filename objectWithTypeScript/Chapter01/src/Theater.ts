import { TicketSeller } from './TicketSeller';
import { Audience } from './Audience';
import { Ticket } from './Ticket';

export class Theater {
  private _ticketSeller: TicketSeller;

  constructor(ticketSeller: TicketSeller) {
    this._ticketSeller = ticketSeller;
  }

  enter(audience: Audience) {
    if (audience.bag.hasInvitation()) {
      const ticket: Ticket = this._ticketSeller.ticketOffice.ticket;
      audience.bag.setTicket(ticket);
    } else {
      const ticket: Ticket = this._ticketSeller.ticketOffice.ticket;
      audience.bag.minusAmount(ticket.fee);
      this._ticketSeller.ticketOffice.plusAmount(ticket.fee);
      audience.bag.setTicket(ticket);
    }
  }
}
