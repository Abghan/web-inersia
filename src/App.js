import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { Home, AboutPage, LoginPage, ServicesPage, WorksPage, ContactPage, NotFound } from './pages';
import ScrollToTop from './components/scrollToTop';
function App() {
  return (
    <div className="App">
      <header id="header">
        <Header />
      </header>
      <ScrollToTop>
        <main className="hero-block">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/web-inersia" element={<Home />} />

            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/works" element={<WorksPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </ScrollToTop>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
