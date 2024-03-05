import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';
// import Pagination from 'react-bootstrap/Pagination';

const worksData = [
  {
    id: 1,
    link: 'https://www.google.com',
    image: require('../assets/images/img1.png'),
    title: 'Battery Energy Storage System (BESS)',
    acronym: 'BESS',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.',
  },
  {
    id: 2,
    link: 'https://www.google.com',
    image: require('../assets/images/img2.png'),
    title: 'Battery Management System (BMS)',
    acronym: 'BMS',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.',
  },
  {
    id: 3,
    link: 'https://www.google.com',
    image: require('../assets/images/img16.jpg'),
    title: 'Electrical Energy and Water Information System (ELISA)',
    acronym: 'ELISA',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.',
  },
  // {
  //   id: 4,
  //   link: 'https://www.google.com',
  //   image: require('../assets/images/img5.jpg'),
  //   title: 'x',
  //   subtitle: 'x',
  // },
  // {
  //   id: 5,
  //   link: 'https://www.google.com',
  //   image: require('../assets/images/img6.jpg'),
  //   title: 'x',
  //   subtitle: 'x',
  // },
  // {
  //   id: 6,
  //   link: 'https://www.google.com',
  //   image: require('../assets/images/img7.jpg'),
  //   title: 'x',
  //   subtitle: 'x',
  // },
  // {
  //   id: 7,
  //   link: 'https://www.google.com',
  //   image: require('../assets/images/img8.jpg'),
  //   title: 'x',
  //   subtitle: 'x',
  // },
  // {
  //   id: 8,
  //   link: 'https://www.google.com',
  //   image: require('../assets/images/img9.jpg'),
  //   title: 'x',
  //   subtitle: 'x',
  // },
  // {
  //   id: 9,
  //   link: 'https://www.google.com',
  //   image: require('../assets/images/img2.jpg'),
  //   title: 'x',
  //   subtitle: 'x',
  // },
];

// let active = 2;
// let items = [];
// for (let number = 1; number <= 5; number++) {
//   items.push(
//     <Pagination.Item key={number} active={number === active}>
//       {number}
//     </Pagination.Item>
//   );
// }

function Works() {
  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our works</h2>
          <div className="subtitle">our awesome works</div>
        </div>
        <Row className="portfoliolist align-items-center">
          {worksData.map((works) => {
            return (
              <Col sm={4} key={works.id}>
                <div className="flip-card">
                  <div class="flip-card-inner">
                    <div class="d-flex align-items-center justify-content-center flip-card-front">
                      {/* <img src="img1.png" alt="Avatar" style="width:300px;height:300px;"> */}
                      <h2 className="text-center mx-2">{works.title}</h2>
                    </div>
                    <div class="flip-card-back">
                      <h2 className="text-center mt-4 mx-4">{works.acronym}</h2>
                      <p className="text-start mx-4">{works.subtitle}</p>
                    </div>
                  </div>
                </div>
              </Col>
              // <Col sm={4} key={works.id}>
              //   <div className="portfolio-wrapper d-flex align-items-center justify-content-center">
              //     <a href={works.link}>
              //       {/* <Image src={works.image} /> */}
              // <h2 className="text-center work-content">{works.title}</h2>
              // <div className="label text-center">
              //   <h3>{works.title}</h3>
              //   <p>{works.subtitle}</p>
              // </div>
              //     </a>
              //   </div>
              // </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default Works;
