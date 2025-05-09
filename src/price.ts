export class Price {
  constructor(
    private name: string,
    private amount: number,
  ) {}

  public get priceName(): string {
    return this.name;
  }

  public get availableAmount(): number {
    return this.amount;
  }

  public set availableAmount(newAmount: number) {
    this.amount = newAmount;
  }
}
