import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResetStyle from './SCSS/reset';
import CommonStyle from './SCSS/common';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Main from './Routes/Main';
import Work from './Routes/Work';

function App() {
  return (
    <>
      <ResetStyle />
      <CommonStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
