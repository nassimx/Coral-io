import { Routes, Route, useLocation } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import { AnimatePresence, motion } from 'framer-motion';

import Header from './pages/Header';
import About from './pages/About';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence exitBeforeEnter initial={false}>
        <GlobalStyle />

        <Header />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />

          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
