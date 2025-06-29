import {
  CallBack,
  ClientsSection,
  FactCounter,
  FeatureSection,
  Footer,
  LowerBar,
  MainSlider,
  ServiceSection,
  TopBar
} from './';

const HomePage = () => {
  return (
    <>
      <TopBar />
      <LowerBar />
      <MainSlider />
      <FeatureSection />
      <ServiceSection />
      <FactCounter />
      <ClientsSection />
      <CallBack />
      <Footer />
    </>
  );
};

export default HomePage;
