import Header from '../components/Header';
import Footer from '../components/Footer';
import MemberCard from '../components/MemberCard'

import fetch from 'isomorphic-fetch';

const Team = (props) => (
  <div>
    <Header />
    <section className="section">
      <div className="container">
        <h3 className="title has-text-weight-bold" style={{marginBottom:"0.5rem"}}>
          Meet the Team
        </h3>
        <p>
          The brilliant minds behind the products that tens of thousands
          of students use. Also check out our <a href="/alumni">Alumni</a>!
        </p>
        <br/>
        <div className="columns is-multiline">
        {props.members.map((member)=>(
          <MemberCard member={member} />
        ))}
        </div>
    </div>
  </section>
  <Footer />
</div>
);

Team.getInitialProps = async({ }) => {
  const res = await fetch('http://platform.pennlabs.org/org/members/?format=json')
  const members = await res.json()
  return { members };
}

export default Team;
