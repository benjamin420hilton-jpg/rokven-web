import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Ticker from './components/Ticker';
import PillarsSection from './components/PillarsSection';
import GearGallery from './components/GearGallery'; // Don't forget this!
import FieldNotes from './components/FieldNotes';   // The new global one
import EmailCapture from './components/EmailCapture';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <Ticker />
      
      {/* 1. Show the "Pillars" (Brand Values) */}
      <PillarsSection />
      
      {/* 2. Show the Gear (The Jacket) */}
      <GearGallery />
      
      {/* 3. Show the Global Protocol (The "Science") */}
      <FieldNotes /> 
      
      {/* 4. Capture the Emails */}
      <EmailCapture />
      
      <Footer />
    </div>
  );
}

export default App;