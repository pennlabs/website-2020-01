import Header from '../components/Header';
import Footer from '../components/Footer';

import CurrentProducts from './products_sections/currentProducts';

const Products = (props) => (
  <div>
    <Header />
    <section className="section">
      <div className="container">
        <h3 className="title is-3" style={{marginBottom:"0.5rem"}}>
          Products
        </h3>
        <p>
          These are all our projects ever!
        </p>
        <br/>
        <CurrentProducts/>
      </div>
    </section>
    <Footer />
  </div>
);

export default Products;
