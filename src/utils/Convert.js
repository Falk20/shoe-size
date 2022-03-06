function numRound(num, precision) {
  return Math.round(num / precision) * precision;
}

export function stihmassToMetric(stihmass) {
  return numRound(((stihmass * 2) / 3) * 10, 5);
}
export function metricToStihmass(metric) {
  return numRound((metric * 3) / 2 / 10, 0.5);
}
export function europeToMetric(europe) {
  return numRound(stihmassToMetric(europe) - 10, 5);
}
export function metricToEurope(metric) {
  return numRound(metricToStihmass(metric + 10), 0.5);
}
