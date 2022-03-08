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
import Login from './pages/login';
import PrivateRoute from './components/PrivateRoute';
import { UserAuthContextProvider } from './context/UserAuthContext';
import Admin from './pages/Admin';

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
      {/* <AnimatePresence exitBeforeEnter initial={false}> */}
      <ScrollToTop />
      <UserAuthContextProvider>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </UserAuthContextProvider>
      <Footer />
      {/* </AnimatePresence> */}
    </>
  );
}

export default App;
