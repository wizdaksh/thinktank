import Header from './components/Header';
import Hero from './components/Hero';
import Home from './pages/Home';
import Solutions from './components/Solutions';
import Footer from './components/Footer';
import Cited from './components/Cited';

// rafce boilerplate
function App() {
  return (
    <main className='bg-blue-100'>
      <Header />
      <Hero />
      <Home />
      <Solutions />
      <Cited />
      <Footer />
    </main>
  )
}

export default App
