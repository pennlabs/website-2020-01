import Header from '../components/Header';
import Footer from '../components/Footer';
import Members from './team_sections/members';
import react, { Component } from 'react'
import fetch from 'isomorphic-fetch';

const Team = (props) => (
  <div>
    <Header />
    <section class="section">
      <div class="container">
        <h3 class="title is-3" style={{marginBottom:"0.5rem"}}>
          Meet the Team
        </h3>
        <p>
          The brilliant minds behind the products that tens of thousands
          of students use. Also check out our <a href="/alumni">Alumni</a>!
        </p>
        <br/><br/>
        <Members members={props.members} />
    </div>
  </section>
  <Footer />
</div>
);

Team.getInitialProps = async({ }) => {
  const res = await fetch('http://platform.pennlabs.org/api/members/?format=json')
  const members = await res.json()
  console.log( members );
  return { members };
}

export default Team;
