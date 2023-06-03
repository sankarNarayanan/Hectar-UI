export function emailValidator(value) {
  let emailregex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return emailregex.test(value);
};

export function requiredValidator(value) {
  return !!value && value !== "";
};
