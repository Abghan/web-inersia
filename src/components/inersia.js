import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import about1 from '../assets/images/about1.jpg';

function Inersia() {
  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Inersia</h2>
          <div className="subtitle">Innovative, Effective, Efficient, Reliable and Sustainable Energy Solutions</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={about1} />
          </Col>
          <Col sm={6}>
            <p>We have a vision of "Becoming a leader in the development and implementation of innovative and sustainable smart grid solutions, as well as ensuring efficient and affordable energy distribution for all Indonesians".</p>
            <p>
              <span>Our Mission:</span>
              <li>Develop and provide innovative and efficient smart grid solutions.</li>
              <li>Ensure affordable and sustainable energy distribution for the entire community.</li>
              <li>Collaborate with stakeholders to improve energy literacy and promote the use of renewable energy.</li>
              <li>Maintain high quality and service standards for customers.</li>
              <li>Provide resources and support to ensure the long-term growth and success of the company.</li>
              <ul></ul>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Inersia;
