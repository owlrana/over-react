import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useRerenderLanguageChange = () => {
  const { i18n } = useTranslation();
  const [, setTick] = useState(0);

  useEffect(() => {
    const handleLanguageChanged = () => setTick((tick) => tick + 1);
    i18n.on('languageChanged', handleLanguageChanged);

    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, [i18n]);
};
