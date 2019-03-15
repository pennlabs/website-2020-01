import Header from '../components/Header';
import Footer from '../components/Footer';
import MemberCard from '../components/MemberCard'

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
        {props.almuni.map((team) => (
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

Team.getInitialProps = async({ }) => {
  const res = await fetch('');
  const members = await res.json();
  const res1 = await fetch('');
  const alumni = await res1.json();
  // const platform = members.filter((member) => member.teams[0].name === ("Platform"));
  // const courses = members.filter((member) => member.teams[0].name === ("Courses"));
  // const basics = members.filter((member) => member.teams[0].name === ("Basics"));
  // const ios = members.filter((member) => member.teams[0].name === ("iOS"));
  // const android = members.filter((member) => member.teams[0].name === ("Android"));
  // return { platform, courses, basics, ios, android }
  return { alumni };
}

export default Team;
