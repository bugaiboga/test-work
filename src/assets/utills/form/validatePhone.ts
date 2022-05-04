import { regexValidate } from "./regexValidate";

export const validatePhone = (text: string | undefined) => {
  const regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  return regexValidate(regex, text);
};
