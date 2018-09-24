module.exports = function solveEquation(equation) {
  equation = equation.replace(/\s/g, "");
  let a = parseInt(equation.split('*x^2')[0]);
  let b = parseInt(equation.split('*x^2')[1].split('*x')[0]);
  let c = parseInt(equation.split('*x^2')[1].split('*x')[1]);
  let discriminant = Math.sqrt((b * b) - 4 * a * c);
  let denominator = 2 * a;
  let root1 = round((-b + discriminant) / denominator);
  let root2 = round((-b - discriminant) / denominator);
  return [root1, root2].sort((a, b) => a - b);
}

function round(value) {
  return Math.round(value * 100) / 100;
};