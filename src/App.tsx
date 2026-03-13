import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Teachers from './components/Teachers';
import Curriculum from './components/Curriculum';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-violet-200 selection:text-violet-900">
      <Navbar />
      <main>
        <Hero />
        <Teachers />
        <Curriculum />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

