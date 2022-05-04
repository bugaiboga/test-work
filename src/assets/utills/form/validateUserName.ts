import { regexValidate } from "./regexValidate";

export const validateUserName = (text: string | undefined) => {
  const regex = /^([a-zA-Z0-9_-]){4,16}$/;

  return regexValidate(regex, text);
};
