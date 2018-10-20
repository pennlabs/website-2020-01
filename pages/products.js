import Header from '../components/Header';
import Footer from '../components/Footer';

import CurrentProducts from './products-components/currentproducts';

const Products = (props) => (
  <div>
    <Header />
    <section class="section">
      <div class="container">
        <h3 class="title is-3" style={{marginBottom:"0.5rem"}}>
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
