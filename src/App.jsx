import { Routes, Route, useLocation } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import { AnimatePresence } from 'framer-motion';

import Header from './pages/Header';
// import About from './pages/About';
import Home from './pages/Home';
// import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './components/Layout/Footer';
import Clients from './pages/Clients';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  return (
    <>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter initial={false}>
        <ScrollToTop />
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </AnimatePresence>
    </>
  );
}

export default App;
