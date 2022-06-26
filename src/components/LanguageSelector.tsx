import { useGlobalContext } from 'context/GlobalContext';

import Select from 'ui/Select';

const languages = [
  { value: 'en', label: 'En' },
  { value: 'ru', label: 'Ру' },
];

const LanguageSelector: React.FC = () => {
  const { locale, setLocale } = useGlobalContext();

  const handleChange = (option: typeof languages[0]) => {
    setLocale(option.value);
  };

  return (
    <Select
      selected={languages.find((l) => l.value === locale)}
      onChange={handleChange}
      options={languages}
      getValue={(option) => option.value}
      getLabel={(option) => option.label}
    />
  );
};

export default LanguageSelector;
