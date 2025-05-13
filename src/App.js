import Header from './components/global/Header';
import Footer from './components/global/Footer';
import Feedback from './components/pages/Home/Feedback';
import FreeSubscriptionStart from './components/pages/Home/FreeSubscriptionStart';
import FAQSection from './components/pages/Home/FAQSection';
import CardsSection from './components/pages/Home/CardsSection';
import FAQClient from './components/pages/Home/FAQClient';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <FAQClient /> */}
      <CardsSection />
      <FAQSection />
      <FreeSubscriptionStart />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
