import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact us</h2>
          <div className="subtitle">get connected with us</div>
        </div>
      </Container>
      <div className="google-map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7921.954562775311!2d107.60513594064584!3d-6.893320672423115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e65767c9b183%3A0x2478e3dcdce37961!2sBandung%20Institute%20of%20Technology!5e0!3m2!1sen!2sid!4v1709175566975!5m2!1sen!2sid"
        ></iframe>
      </div>

      <br />
      <Container fluid>
        <div className="contact-info">
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              info@inersia.co.id
            </li>
            <li>
              <a href="https://www.linkedin.com/company/pt-inovasi-energi-asia-inersia/">
                <i className="fas fa-brands fa-linkedin"></i>
              </a>
              PT Inovasi Energi Asia (INERSIA)
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              Bandung, Indonesia
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
