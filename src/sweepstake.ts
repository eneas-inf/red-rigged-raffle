import { Price } from "./price.js";

export class Sweepstake {
  constructor(
    private participants: string[],
    private prices: Price[],
  ) {}

  public evaluate(): Map<string, string> {
    return this.assignPrices(this.shuffleParticipants());
  }

  private shuffleParticipants() {
    const shuffledParticipants = new Array<string>();
    while (this.participants.length > 0) {
      const randomNum = Math.random();
      const index = Math.floor(
        randomNum * this.participants.length,
      );
      const participant = this.participants[index];
      shuffledParticipants.push(participant);
      this.participants.pop();
    }
    return shuffledParticipants;
  }

  private assignPrices(shuffledParticipants: string[]) {
    const winners = new Map<string, string>();
    while (this.prices.length > 0 && shuffledParticipants.length > 0) {
      const currentPrice = this.prices[0];
      const winner = shuffledParticipants.shift();
      winners.set(winner, currentPrice.priceName);
      this.removeFirstPrice();
    }
    return winners;
  }

  private removeFirstPrice() {
    if (this.prices[0].availableAmount > 0) {
      this.prices.shift();
    } else {
      this.prices[0].availableAmount--;
    }
  }
}
