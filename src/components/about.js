import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
// import ProgressBar from 'react-bootstrap/ProgressBar';

// import img1 from '../assets/images/img1.jpg';
import about1 from '../assets/images/about1.jpg';

function About() {
  // const html = 80;
  // const responsive = 95;
  // const photoshop = 60;

  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About Us</h2>
          <div className="subtitle">learn more about us</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={about1} />
          </Col>
          <Col sm={6}>
            <p>PT Inovasi Energi Asia (INERSIA) is an energy systems company that drives the progress of human civilization by providing energy system solutions that are innovative, effective, efficient, reliable and sustainable.</p>
            <p>We believe that energy is the key to improving the quality of human life and protecting the environment.</p>
            <p>We have the vision to become a company providing sustainable energy system solutions that can benefit customers, partners, employees, and society.</p>
            {/* <p>Inersia is a company affiliated with Lab. Energy Management, Engineering Physics ITB, which focuses on innovation and development in the energy field.</p> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
