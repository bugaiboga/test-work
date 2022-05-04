import { regexValidate } from "./regexValidate";

export const validateCity = (text: string | undefined) => {
  const regex =
    /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]{3,20}$/;

  return regexValidate(regex, text);
};
