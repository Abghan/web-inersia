import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const worksData = [
  {
    id: 1,
    link: 'https://www.google.com',
    image: require('../assets/images/img2.png'),
    title: 'Smart Building',
    acronym: '',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.',
  },
  {
    id: 2,
    link: 'https://www.google.com',
    image: require('../assets/images/BMS.jpg'),
    title: 'Battery Management System (BMS)',
    acronym: 'BMS',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.',
  },
  {
    id: 3,
    link: 'https://www.google.com',
    image: require('../assets/images/img16.jpg'),
    title: 'SPKL',
    acronym: 'SPKL',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.',
  },
  {
    id: 4,
    link: 'https://www.google.com',
    image: require('../assets/images/microgrid.png'),
    title: 'Smart Microgrid',
    acronym: '',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.',
  },
  // {
  //   id: 5,
  //   link: 'https://www.google.com',
  //   image: require('../assets/images/img16.jpg'),
  //   title: 'Electrical Energy and Water Information System (ELISA)',
  //   acronym: 'ELISA',
  //   content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.',
  // },
];

function AllWorks() {
  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder mb-0">
          <h2>OUR WORKS</h2>
          <div className="subtitle">our awesome works</div>
        </div>

        {worksData.map((works) => {
          if (parseInt(works.id) % 2 === 1) {
            return (
              <Row className="p-3 pt-5">
                <Col sm={4}>
                  <h2>{works.title}</h2>
                  <Image src={works.image} />
                </Col>
                <Col sm={8}>
                  <p>
                    Mollit occaecat cupidatat mollit nulla mollit dolore. Aliqua nulla sint eiusmod sunt ut eu nulla aliquip dolor ad commodo. Ullamco consectetur voluptate ad minim Lorem fugiat ex dolore ipsum sunt ut commodo nisi. In
                    tempor sit ex consequat elit voluptate magna. Voluptate exercitation amet occaecat cillum. Ad do cupidatat officia commodo culpa nostrud in fugiat.
                  </p>
                  <p>
                    Fugiat occaecat nostrud aute amet quis Lorem aute sint enim qui. Voluptate adipisicing dolore eu irure officia aliquip incididunt esse pariatur veniam ullamco occaecat quis pariatur. Dolore adipisicing aliquip in ad
                    aliquip in pariatur est nostrud excepteur ullamco.
                  </p>
                  <p>
                    Reprehenderit adipisicing do fugiat nostrud labore. Nulla pariatur officia ex sunt dolore veniam esse in cillum consequat velit. Officia pariatur do esse ipsum ex. Mollit minim magna labore amet consectetur dolore. Et
                    consectetur esse cupidatat laboris tempor nisi velit exercitation tempor. Minim labore officia sit nostrud eiusmod pariatur ullamco tempor sint eu. Incididunt non ea excepteur fugiat nisi aliquip dolor excepteur esse
                    adipisicing aute aliqua ea ullamco.
                  </p>
                </Col>
              </Row>
            );
          } else {
            return (
              <Row className="works-bg p-3 pt-5">
                <Col sm={8}>
                  <p>
                    Mollit occaecat cupidatat mollit nulla mollit dolore. Aliqua nulla sint eiusmod sunt ut eu nulla aliquip dolor ad commodo. Ullamco consectetur voluptate ad minim Lorem fugiat ex dolore ipsum sunt ut commodo nisi. In
                    tempor sit ex consequat elit voluptate magna. Voluptate exercitation amet occaecat cillum. Ad do cupidatat officia commodo culpa nostrud in fugiat.
                  </p>
                  <p>
                    Fugiat occaecat nostrud aute amet quis Lorem aute sint enim qui. Voluptate adipisicing dolore eu irure officia aliquip incididunt esse pariatur veniam ullamco occaecat quis pariatur. Dolore adipisicing aliquip in ad
                    aliquip in pariatur est nostrud excepteur ullamco.
                  </p>
                  <p>
                    Reprehenderit adipisicing do fugiat nostrud labore. Nulla pariatur officia ex sunt dolore veniam esse in cillum consequat velit. Officia pariatur do esse ipsum ex. Mollit minim magna labore amet consectetur dolore. Et
                    consectetur esse cupidatat laboris tempor nisi velit exercitation tempor. Minim labore officia sit nostrud eiusmod pariatur ullamco tempor sint eu. Incididunt non ea excepteur fugiat nisi aliquip dolor excepteur esse
                    adipisicing aute aliqua ea ullamco.
                  </p>
                </Col>
                <Col sm={4}>
                  <h2>{works.title}</h2>
                  <Image src={works.image} />
                </Col>
              </Row>
            );
          }
        })}
      </Container>
    </section>
  );
}

export default AllWorks;
