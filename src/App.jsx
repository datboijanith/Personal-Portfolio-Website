// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/ui/ScrollProgress';

function App() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;