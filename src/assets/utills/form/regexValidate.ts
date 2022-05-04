export const regexValidate = (
  regex: RegExp,
  text: string | undefined
): boolean => {
  const regexValidate = regex ? regex : false;

  if (!regexValidate) return false;

  if (!text) return false;

  if (!regexValidate.test(text)) return false;

  if (regexValidate.test(text)) return true;

  return false;
};
