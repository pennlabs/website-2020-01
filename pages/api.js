import Header from '../components/Header';
import Footer from '../components/Footer';
import CurrentProducts from './api-components/currentproductsAPI'

const API = (props) => (
  <div>
    <Header />
    <section class="section">
      <div class="container">
        <h3 class="title is-3" style={{marginBottom:"0.5rem"}}>
          Penn Labs API
        </h3>
        <p>
          The public API routes for our product suite.
        </p>
        <br/>
        <CurrentProducts/>
      </div>
    </section>
    <Footer />
  </div>
);

export default API;
