const DEFAULT_STRING_LENGTH = 6;

export const generateAlphanumericString = (length = DEFAULT_STRING_LENGTH) =>
  Math
    .round(Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))
    .toString(36)
    .slice(1);