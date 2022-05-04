import { regexValidate } from "./regexValidate";

export const validateName = (text: string | undefined) => {
  const regex = /^([a-zA-Z])+ ([a-zA-Z]){3,16}$/;

  return regexValidate(regex, text);
};
