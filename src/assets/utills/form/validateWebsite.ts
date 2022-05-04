import { regexValidate } from "./regexValidate";

export const validateWebsite = (text: string | undefined) => {
  const regex = /^[a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}/;

  return regexValidate(regex, text);
};
