import { TicketOffice } from './TicketOffice';
import { Audience } from './Audience';

export class TicketSeller {
  private _ticketOffice: TicketOffice;

  constructor(ticketOffice: TicketOffice) {
    this._ticketOffice = ticketOffice;
  }

  sellTo(audience: Audience): void {
    this._ticketOffice.sellTicketTo(audience)
  }
}
