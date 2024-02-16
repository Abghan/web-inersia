import Carousel from 'react-bootstrap/Carousel';

var heroData = [
  {
    id: 1,
    image: require('../assets/images/img-hero4.jpg'),
    title: 'Driving Progress with INERSIA',
    description: 'Innovative, Effective, Efficient, Reliable and Sustainable Energy Solutions ',
    link: 'https://www.google.com',
  },
  {
    id: 2,
    image: require('../assets/images/img-hero5.jpg'),
    title: 'Highlight 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    link: 'https://www.facebook.com',
  },
  {
    id: 3,
    image: require('../assets/images/img-hero3.jpg'),
    title: 'Highlight 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    link: 'https://www.twitter.com',
  },
];

function Hero() {
  return (
    <section id="home" className="hero-block">
      <Carousel>
        {heroData.map((hero) => {
          return (
            <Carousel.Item key={hero.id}>
              <img className="d-block w-100 imageHero" src={hero.image} alt={'slide ' + hero.id} />
              <Carousel.Caption>
                <h2>{hero.title}</h2>
                <p>{hero.description}</p>
                <a className="btn btn-primary" href={hero.link}>
                  Learn More <i className="fas fa-chevron-right"></i>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}

export default Hero;
