export const emailValidator = (value) => {
  let emailregex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return emailregex.test(value);
};
