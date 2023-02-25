import { useState } from 'react';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Projects from './components/projects/Projects';
import Socials from './components/socials/Socials';
import './styles/App.css';

function App() {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [mobileNavIsActive, setMobileNavIsActive] = useState(false);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    // const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      setMobileNavIsActive(true);
    } else setMobileNavIsActive(false);
  };
  return (
    <div
      className="App"
      onTouchStart={(e) => onTouchStart(e)}
      onTouchMove={(e) => onTouchMove(e)}
      onTouchEnd={() => onTouchEnd()}
    >
      <main>
        <Socials />
        <Header mobileNavIsActive={mobileNavIsActive} setMobileNavIsActive={setMobileNavIsActive} />
        <Hero />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
