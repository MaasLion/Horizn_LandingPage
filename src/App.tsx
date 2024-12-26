import { useState } from 'react';
import { Language } from './types/language';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { StartScreen } from './components/sections/StartScreen';
import { DashboardPreview } from './components/sections/DashboardPreview';
import { ProblemStatement } from './components/ProblemStatement';
import { Solution } from './components/Solution';
import { Journey } from './components/journey/Journey';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/layout/Footer';

function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');

  return (
    <div className="relative">
      <Navbar currentLang={currentLang} onLanguageToggle={setCurrentLang} />
      <HeroSection currentLang={currentLang} />
      <StartScreen currentLang={currentLang} />
      <DashboardPreview currentLang={currentLang} />
      <ProblemStatement currentLang={currentLang} />
      <Solution currentLang={currentLang} />
      <Journey currentLang={currentLang} />
      <Features currentLang={currentLang} />
      <Testimonials currentLang={currentLang} />
      <FinalCTA currentLang={currentLang} />
      <Footer currentLang={currentLang} />
    </div>
  );
}

export default App;