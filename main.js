function tierCalculate(wonMatchesCount, lostMatchesCount) {
  let matchBalance = wonMatchesCount - lostMatchesCount;
  let tier;

  if (matchBalance <= 10) {
    tier = "Iron";
  } else if (matchBalance <= 20) {
    tier = "Bronze";
  } else if (matchBalance <= 50) {
    tier = "Silver";
  } else if (matchBalance <= 80) {
    tier = "Gold";
  } else if (matchBalance <= 90) {
    tier = "Diamond";
  } else if (matchBalance <= 100) {
    tier = "Legendary";
  } else {
    tier = "Immortal";
  }

  console.log(
    `Hero's match balance is ${matchBalance}, so the tier is ${tier}`
  );
}

tierCalculate(65, 13);
