import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const teamsData = [
  {
    id: 1,
    image: require('../assets/images/team0.png'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Prof. Ir. Edi Leksono, M.Eng., PhD.',
    designation: 'Commissioner',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.',
  },
  {
    id: 2,
    image: require('../assets/images/team0.png'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Dr.-Ing. Justin Pradipta, S.T, M.T.',
    designation: 'CEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.',
  },
  {
    id: 3,
    image: require('../assets/images/team0.png'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Dr. Irsyad Nashirul Haq, S.T., M.T.',
    designation: 'CTO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.',
  },
  {
    id: 4,
    image: require('../assets/images/team0.png'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Dr.-Ing, Thomas Budiarto, S.T. M.T.',
    designation: 'CMO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.',
  },
  {
    id: 5,
    image: require('../assets/images/team0.png'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Putu Handre Kertha Utama, S.T. M.T.',
    designation: 'COO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.',
  },
  {
    id: 6,
    image: require('../assets/images/team0.png'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'X',
    designation: 'BD',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.',
  },
  {
    id: 7,
    image: require('../assets/images/team0.png'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'X',
    designation: 'X',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.',
  },
  {
    id: 8,
    image: require('../assets/images/team0.png'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'X',
    designation: 'X',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.',
  },
];

function Teams() {
  return (
    <section id="teams" className="block teams-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our teams</h2>
          <div className="subtitle">some of our experts</div>
        </div>
        <Row>
          {teamsData.map((teams) => {
            return (
              <Col sm={3} key={teams.id}>
                <div className="image">
                  <Image src={teams.image} />
                  <div className="overlay">
                    <div className="socials">
                      <ul>
                        <li>
                          <a href={teams.fbLink}>
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href={teams.twitterLink}>
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href={teams.linkedinLink}>
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <h3>{teams.name}</h3>
                  <span className="designation">{teams.designation}</span>
                  <p>{teams.description}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default Teams;
