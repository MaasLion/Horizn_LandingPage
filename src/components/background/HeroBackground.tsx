export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50 transition-opacity duration-700"
        style={{
          backgroundImage: 'url(/src/images/background_hero.jpg)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#091235] via-[#091235]/90 to-[#091235]" />
    </div>
  );
};