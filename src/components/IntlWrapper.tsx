import { IntlProvider } from 'react-intl';

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
  const locale = navigator.language.split('-')[0];

  return (
    <IntlProvider messages={messages[locale]} locale={locale} defaultLocale="en">
      {children}
    </IntlProvider>
  );
};

export default IntlWrapper;
