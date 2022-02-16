import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';

import Header from './pages/Header';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
