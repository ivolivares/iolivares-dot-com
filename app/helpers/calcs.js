/**
 * Calculates a difference between a 'since date' and now.
 * @param {Date} sinceDate Date for start calculation until now.
 * @return {Number} - Number of years between the 'since date' and now.
 */
export const calculateYears = (sinceDate) => {
  const ageDifMs = Date.now() - sinceDate.getTime()
  const ageDate = new Date(ageDifMs) // milliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}