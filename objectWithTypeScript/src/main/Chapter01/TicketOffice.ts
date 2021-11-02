import { Ticket } from './Ticket';
import { Audience } from './Audience';

export class TicketOffice {
  private _amount: number;
  private _tickets: Ticket[];

  constructor(amount: number, tickets: Ticket[]) {
    this._amount = amount;
    this._tickets = tickets;
  }

  get amount(): number {
    return this._amount
  }

  get ticket(): Ticket {
    return this._tickets.splice(0, 1)[0];
  }

  minusAmount(amount: number): void {
    this._amount -= amount
  }

  plusAmount(amount: number): void {
    this._amount += amount
  }

  sellTicketTo(audience: Audience): void {
    this.plusAmount(audience.buy(this.ticket));
  }
}
