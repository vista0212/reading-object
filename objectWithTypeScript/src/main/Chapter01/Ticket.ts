export class Ticket {
  private _fee: number;

  get fee(): number {
    return this._fee;
  }

  constructor(fee: number) {
    this._fee = fee;
  }
}
