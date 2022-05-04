import { regexValidate } from "./regexValidate";

export const validateEmail = (text: string | undefined) => {
  const regex = /^[^@]+@\w+(\.\w+)+\w$/;

  return regexValidate(regex, text);
};
