import { Spring } from 'react-spring';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Products from './splash_sections/products';
import Intro from './splash_sections/intro';
import About from './splash_sections/about';
import News from './splash_sections/news';
import Contact from './splash_sections/contact';

const Splash = (props) => (
  <div>
    <Header />
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={100}>
      {props => <Intro style={props} />}
    </Spring>
    <Products />
    <About />
    <News />
    <Contact />
    <Footer />
  </div>
);




export default Splash;
