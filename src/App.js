import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from "./SCSS/common";
import Header from "./Components/Header";
import Main from './Routes/Main';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/*" element={<Main />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
