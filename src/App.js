import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { Home, DetailPage, LoginPage } from './pages';

function App() {
  return (
    <div className="App">
      <header id="header">
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/1" element={<DetailPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
