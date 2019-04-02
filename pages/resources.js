import Header from '../components/Header';
import Footer from '../components/Footer';
import Table from '../components/Table';

const Guides = (props) => (
  <div>
    <Header />
    <div className="container">
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Resources
          </h1>
          <h2 class="subtitle">
            Labs-developed APIs to help you build products.
          </h2>
        </div>
      </div>
    </section>
    </div>
    <Footer />
  </div>
);

export default Guides;
