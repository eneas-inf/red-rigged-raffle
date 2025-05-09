import { Sweepstake } from "./sweepstake.js";
import { Price } from "./price.js";

const participants = [
  "@Gangsta2007",
  "@LockeDerBoss",
  "@MiiMiiSeinBruder",
  "@AlphaKevin",
  "@RedSoldier499",
  "@Louisa12",
  "@Drachenlord",
  "@Tanzverbot",
  "@tiger10ab",
  "@kaesekrokette99",
  "@fortnite4ever",
  "@ColdplayFan",
  "@Sören2013",
  "@MichiJackson",
  "@Ronaldo7",
  "@SonGoku2011",
  "@NarutoBoy2000",
  "@Diggah69",
  "@roflomat",
  "@waifu_weeb",
  "@derp",
  "@MaxPower9000",
  "@MikrowellenPizza2006",
  "@LeonMachere",
  "@LeonMachere",
  "@LeonMachere",
  "@LeonMachere",
  "@LeonMachere",
  "@LeonMachere",
  "@LeonMachere",
  "@LeonMachere",
  "@LeonMachere",
  "@LeonMachere",
];
const prices = [
  new Price("iPhone 16 Pro", 1),
  new Price("Trip nach Dubi", 1),
  new Price("Stepper nach Isti", 1),
  new Price("10 kg Haribo", 2),
  new Price("PlayStation 5 Slim", 3),
  new Price("gebrauchte Sneaker", 5),
];
const winners = new Sweepstake(
    participants,
    prices,
).evaluate();
for (const [winner, price] of winners.entries()) {
  console.log(`${winner} gewinnt ${price}`);
}
