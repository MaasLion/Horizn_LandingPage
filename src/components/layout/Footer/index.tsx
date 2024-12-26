import { Language } from '../../../types/language';
import { Impressum } from './Impressum';

interface Props {
  currentLang: Language;
}

export const Footer = ({ currentLang }: Props) => {
  return (
    <footer className="bg-[#091235] py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <Impressum currentLang={currentLang} />
      </div>
    </footer>
  );
};