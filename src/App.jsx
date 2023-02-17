import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Hero />
        <Footer />
      </main>
    </div>
  );
}

export default App;
