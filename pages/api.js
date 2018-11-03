import Header from '../components/Header';
import Footer from '../components/Footer';
import CurrentProducts from './api_sections/currentProductsAPI'

const API = (props) => (
  <div>
    <Header />
    <section className="section">
      <div className="container">
        <h3 className="title is-3" style={{marginBottom:"0.5rem"}}>
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
