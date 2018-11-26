import Header from '../components/Header';
import Footer from '../components/Footer';

import Products from './splash_sections/products';
import Intro from './splash_sections/intro';
import About from './splash_sections/about';
import News from './splash_sections/news';
import Contact from './splash_sections/contact';

const Index = (props) => (
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

export default Index;
