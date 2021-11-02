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
    return this._bag.hold(ticket);
  }
}
