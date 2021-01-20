function solutionExercice3(L) {
  var res = "EXERCICE 3";
  let occurency = {};
  const Occ = L.map(number =>
    occurency.hasOwnProperty(number)
      ? (occurency[number] = occurency[number] + 1)
      : (occurency[number] = 1)
  );
  for (let number in occurency) {
    if (occurency[number] === 1) {
      res = number;
      break;
    }
  }
  return res;
}
