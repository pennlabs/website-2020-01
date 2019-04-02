import Header from '../components/Header';
import Footer from '../components/Footer';
import MemberCard from '../components/MemberCard'

import fetch from 'isomorphic-fetch';

//Also check out our <a href="/alumni">Alumni</a>!

const Members = (props) => (
  <div>
    <Header />
    <section className="section">
      <div className="container">
        <h3 className="title is-3" style={{marginBottom:"0.5rem", fontWeight:800}}>
          Meet the Team
        </h3>
        <p>
          The brilliant minds behind the products that tens of thousands
          of students use.
        </p>
        <hr />
        {props.teams.map((team) => (
          <div>
            <h4 className="title is-4" style={{fontWeight:800, marginBottom: "0.3rem"}}>
              {team.name}
            </h4>
            <p> {team.description} </p>
            <br/>
            <div className="columns is-multiline">
              {(team.members) ? ((team.members.map((member)=> <MemberCard member={member} /> ))) : (<div></div>)}
            </div>
            <br/>
          </div>
        ))}
    </div>
  </section>
  <Footer />
</div>);

<<<<<<< HEAD:pages/team.js
Team.getInitialProps = async({ }) => {
  const res = await fetch('http://platform.pennlabs.org/org/teams/?format=json');
  const teams = await res.json();
=======
Members.getInitialProps = async({ }) => {
  const res = await fetch('http://platform.pennlabs.org/org/members/?format=json');
  const members = await res.json();
  const res1 = await fetch('http://platform.pennlabs.org/org/teams/?format=json');
  const teams = await res1.json();
  console.log(teams);
  // const platform = members.filter((member) => member.teams[0].name === ("Platform"));
  // const courses = members.filter((member) => member.teams[0].name === ("Courses"));
  // const basics = members.filter((member) => member.teams[0].name === ("Basics"));
  // const ios = members.filter((member) => member.teams[0].name === ("iOS"));
  // const android = members.filter((member) => member.teams[0].name === ("Android"));
  // return { platform, courses, basics, ios, android }
>>>>>>> b44425178e1bc2cc251fe63f99e3e970cce33ff1:pages/members.js
  return { teams };
}

export default Members;
