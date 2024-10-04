import i18n from 'i18next';

// Utility function to access translations globally
export const t = (key: string, options?: any) => {
  return i18n.t(key, options);
};
