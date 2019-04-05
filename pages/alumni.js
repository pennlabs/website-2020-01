import Header from '../components/Header';
import Footer from '../components/Footer';
import AlumniCard from '../components/AlumniCard'

import fetch from 'isomorphic-fetch';

//Also check out our <a href="/alumni">Alumni</a>!

const Alumni = (props) => (
  <div>
    <Header />
    <section className="section">
      <div className="container">
        <h3 className="title is-3" style={{marginBottom:"0.5rem", fontWeight:800}}>
          We love our Alumni!
        </h3>
        <p>
          Former labbies leaving their mark on the world.
        </p>
        <hr />
        <div className="columns">
          {props.alumni.map((alum) =>
            <AlumniCard alum={alum}/>
          )}
        </div>
      </div>
    </section>
    <Footer />
  </div>);

Alumni.getInitialProps = async({ }) => {
  const res = await fetch('https://platform.pennlabs.org/org/alumni/?format=json');
  const alumni = await res.json();
  return { alumni };
}

export default Alumni;
