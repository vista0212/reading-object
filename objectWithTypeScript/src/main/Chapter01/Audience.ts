import { Bag } from './Bag';
import { Ticket } from './Ticket';

export class Audience {
  private _bag: Bag;

  constructor(bag: Bag) {
    this._bag = bag;
  }

  get bag(): Bag {
    return this._bag;
  }

  buy(ticket: Ticket): number {
    if (this._bag.hasInvitation()) {
      this._bag.setTicket(ticket);
      return 0;
    } else {
      this._bag.minusAmount(ticket.fee);
      this._bag.setTicket(ticket);
      return ticket.fee;
    }
  }
}
