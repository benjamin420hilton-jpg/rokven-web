import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Ticker from './components/Ticker';
import PillarsSection from './components/PillarsSection';
import FieldNotesSection from './components/FieldNotesSection';
import EmailCapture from './components/EmailCapture';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <Ticker />
      <PillarsSection />
      <FieldNotesSection />
      <EmailCapture />
      <Footer />
    </div>
  );
}

export default App;