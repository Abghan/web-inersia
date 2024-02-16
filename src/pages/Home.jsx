import { Hero, About, Works, Services, Teams } from '../components';

function Home() {
  return (
    <div className="App">
      {/* <header id="header">
        <Header />
      </header> */}
      <main>
        <Hero />
        <About />
        <Services />
        <Works />
        <Teams />
        {/* <Testimonials /> */}
        {/* <Pricing /> */}
        {/* <Blog /> */}
        {/* <Contact /> */}
      </main>
      {/* <footer id="footer">
        <Footer />
      </footer> */}
    </div>
  );
}

export default Home;
