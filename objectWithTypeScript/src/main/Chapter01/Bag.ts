import { Invitation } from './Invitation';
import { Ticket } from './Ticket';

export class Bag {
  private _amount: number;
  private _invitation: Invitation;
  private _ticket: Ticket;


  constructor(amount: number, invitation: Invitation = null) {
    this._amount = amount;
    this._invitation = invitation;
  }

  get amount(): number {
    return this._amount;
  }

  hasInvitation(): boolean {
    return this._invitation != null;
  }

  hasTicket(): boolean {
    return this._ticket != null;
  }

  setTicket(ticket: Ticket): void {
    this._ticket = ticket;
  }

  minusAmount(amount: number): void {
    this._amount -= amount;
  }

  plusAmount(amount: number): void {
    this._amount += amount;
  }
}
