let heroName = "Wallace, The Greater Knight";
let xpAmount = 100000000;
let tier;

if (xpAmount >= 0 && xpAmount <= 1000) {
  tier = "Iron";
} else if (xpAmount >= 1001 && xpAmount <= 2000) {
  tier = "Bronze";
} else if (xpAmount >= 2001 && xpAmount <= 6000) {
  tier = "Silver";
} else if (xpAmount >= 6001 && xpAmount <= 7000) {
  tier = "Gold";
} else if (xpAmount >= 7001 && xpAmount <= 8000) {
  tier = "Platinum";
} else if (xpAmount >= 8001 && xpAmount <= 9000) {
  tier = "Ascending";
} else if (xpAmount >= 9001 && xpAmount <= 10000) {
  tier = "Immortal";
} else if (xpAmount >= 10000) {
  tier = "Radiant";
} else {
  tier = "Get Good, baby";
}

console.log(
  "The hero, " +
    heroName +
    ", is on tier " +
    tier +
    ", with an XP amount of " +
    xpAmount
);
