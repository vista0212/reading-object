import { TicketSeller } from './TicketSeller';
import { Audience } from './Audience';

export class Theater {
  private _ticketSeller: TicketSeller;

  constructor(ticketSeller: TicketSeller) {
    this._ticketSeller = ticketSeller;
  }

  enter(audience: Audience) {
    this._ticketSeller.sellTo(audience);
  }
}
