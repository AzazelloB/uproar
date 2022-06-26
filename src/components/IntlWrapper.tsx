import { IntlProvider } from 'react-intl';

import { useGlobalContext } from 'context/GlobalContext';

import messagesRu from 'translations/compiled/ru.json';
import messagesEn from 'translations/compiled/en.json';

const messages: any = {
  ru: messagesRu,
  en: messagesEn,
};

interface IntlWrapperProps {
  children: React.ReactNode;
}

const IntlWrapper: React.FC<IntlWrapperProps> = ({ children }) => {
  const { locale } = useGlobalContext();

  return (
    <IntlProvider messages={messages[locale]} locale={locale} defaultLocale="en">
      {children}
    </IntlProvider>
  );
};

export default IntlWrapper;
