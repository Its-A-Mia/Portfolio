import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Projects from './components/projects/Projects';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Hero />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}

export default App;
