import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { Home, AboutPage, LoginPage, NotFound } from './pages';

function App() {
  return (
    <div className="App">
      <header id="header">
        <Header />
      </header>
      <main className="hero-block">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
