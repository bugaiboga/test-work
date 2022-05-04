import { regexValidate } from "./regexValidate";

export const validateStreet = (text: string | undefined) => {
  const regex = /^[a-zA-Z0-9-\. ]{4,30}$/;

  return regexValidate(regex, text);
};
