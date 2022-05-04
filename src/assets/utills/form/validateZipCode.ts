import { regexValidate } from "./regexValidate";

export const validateZipCode = (text: string | undefined) => {
  const regex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

  return regexValidate(regex, text);
};
