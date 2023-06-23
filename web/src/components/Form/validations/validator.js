/**
 * standard validator for emailValidation
 * @param {String} value
 * @returns {Boolean}
 */
export function emailValidator(value) {
  let emailregex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return emailregex.test(value);
}

/**
 * Validator for Required
 * This will accept any non empty string
 * undefined will throw an error
 * @param {String} value
 * @returns {Boolean}
 */
export function requiredValidator(value) {
  return !!value && value !== "";
}

/**
 * Validator  for Phone Number
 * This will accept any number between 6 to 15
 * No other charectors are accepted
 * @param {String} value
 * @returns {Boolean}
 */
export function phoneValidator(value) {
  const phoneRegex = /^\d{6,15}$/;
  // removing the country code before validation
  value = value.split(" ").slice(1).join("");
  return phoneRegex.test(value);
}
