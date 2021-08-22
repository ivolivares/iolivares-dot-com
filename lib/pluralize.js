/**
 * This is a plurization function just because i18next is not working at this point.
 * TODO: Change this by "native" i18next pluralization.
 * 
 * @param {Number} number Number to calculate pluralization
 * @param {String} singular Word in singular form
 * @param {String} plural Word in plural form
 * 
 * @returns The right word to pluralized with the number inside.
 */

const Pluralize = ({ number, singular, plural }) => (
  (number === 1 ? singular : plural).replace(/(<number\/>)/g, number)
)

export default Pluralize