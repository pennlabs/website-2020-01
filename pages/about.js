import Header from '../components/Header';
import Footer from '../components/Footer';
import MemberCard from '../components/MemberCard'

import fetch from 'isomorphic-fetch';

//Also check out our <a href="/alumni">Alumni</a>!

const About = (props) => (
  <div>
    <Header />
    <section className="section">
      <div className="container">
        <h3 className="title is-3" style={{marginBottom:"0.5rem", fontWeight:800}}>
          About Us
        </h3>
        <p>
          The secret sauce that makes Penn Labs what it is.
        </p>        
    </div>
  </section>
  <Footer />
</div>);

export default About;
