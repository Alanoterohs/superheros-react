function summation(heros, index) {
  let result2 = 0;
  let summationHeight = 0;
  let averageHeight = 0;
  let summationWeight = 0;
  let averageWeight = 0;

  const { powerstats } = heros[index];
  result2 = result2 + parseInt(powerstats.combat) + parseInt(powerstats.durability) +
  parseInt(powerstats.intelligence) + parseInt(powerstats.power) + parseInt(powerstats.speed) +
  parseInt(powerstats.strength); //Sumatoria de todos los powerstats

  return [result2];
};

export default summation;
