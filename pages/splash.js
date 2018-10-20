import Header from '../components/Header';
import Footer from '../components/Footer';

import Products from './splash-components/products'
import Intro from './splash-components/intro';
import About from './splash-components/about'
import News from './splash-components/news'
import Contact from './splash-components/contact'

const Splash = (props) => (
  <div>
    <Header />
    <Intro />
    <Products />
    <About />
    <News />
    <Contact />
    <Footer />
  </div>
);


export default Splash;
