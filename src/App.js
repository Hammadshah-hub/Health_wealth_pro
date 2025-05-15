import Header from './components/global/Header';
import Footer from './components/global/Footer';
import Feedback from './components/pages/Home/Feedback';
import FreeSubscriptionStart from './components/pages/Home/FreeSubscriptionStart';
import FAQSection from './components/pages/Home/FAQSection';
import CardsSection from './components/pages/Home/CardsSection';
import FAQClient from './components/pages/Home/FAQClient';
import FAQClient2 from './components/pages/Home/FAQClient2';
import Features from './components/pages/Home/SystemFeatures';
import Advantages from './components/pages/Home/Advantages';
import Hero from './components/pages/Home/Hero';
import Signup from './components/pages/Registration/Signup';


import './App.css';

function App() {
  return (
    <div className="App">
      
      <Signup />
      <Header />
      <Hero />
      <Advantages />
      <Features /> 
      <FAQClient /> 
      <FAQClient2 /> 
      <CardsSection />
      <FAQSection />
      <FreeSubscriptionStart />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
