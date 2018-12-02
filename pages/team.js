import Header from '../components/Header';
import Footer from '../components/Footer';
import MemberCard from '../components/MemberCard'

import fetch from 'isomorphic-fetch';

const Team = (props) => (
  <div>
    <Header />
    <section className="section">
      <div className="container">
        <h3 className="title is-3" style={{marginBottom:"0.5rem"}}>
          Meet the Team
        </h3>
        <p>
          The brilliant minds behind the products that tens of thousands
          of students use. Also check out our <a href="/alumni">Alumni</a>!
        </p>
        <br/><br/>
        <h4 className="title is-4" style={{marginBottom: 0}}>
          Platform
        </h4>
        <p> Consolidating the software that Penn Labs builds and developing open source projects to help the organization scale </p>
        <br/>
        <div className="columns is-multiline">
          {props.platform.map((member) => <MemberCard member={member} />)}
        </div>
        <h3 className="title is-4" style={{marginBottom: 0}}>
          Courses
        </h3>
        <p>  Penn Courses manages all of our services which help students with registration and course planning. Penn Labs was started and built up around Penn Course Review, and the Penn Courses product offering has grown since then to include Penn Course Alert and Penn Course Search.</p>
        <br/>
        <div className="columns is-multiline">
          {props.courses.map((member) => <MemberCard member={member} />)}
        </div>
        <h3 className="title is-4" style={{marginBottom: 0}}>
          iOS
        </h3>
        <p>  </p>
        <br/>
        <div className="columns is-multiline">
          {props.ios.map((member) => <MemberCard member={member} />)}
        </div>
        <h3 className="title is-4" style={{marginBottom: 0}}>
          Android
        </h3>
        <p>  </p>
        <br/>
        <div className="columns is-multiline">
          {props.android.map((member) => <MemberCard member={member} />)}
        </div>
        <h3 className="title is-4" style={{marginBottom: 0}}>
          Basics
        </h3>
        <p>  </p>
        <br/>
        <div className="columns is-multiline">
          {props.basics.map((member) => <MemberCard member={member} />)}
        </div>

    </div>
  </section>
  <Footer />
  </div>
  );

  Team.getInitialProps = async({ }) => {
    const res = await fetch('http://platform.pennlabs.org/org/members/?format=json')
    const members = await res.json()
    console.log(members[0].teams);
    const platform = members.filter((member) => member.teams[0].name === ("Platform"));
    const courses = members.filter((member) => member.teams[0].name === ("Courses"));
    const basics = members.filter((member) => member.teams[0].name === ("Basics"));
    const ios = members.filter((member) => member.teams[0].name === ("iOS"));
    const android = members.filter((member) => member.teams[0].name === ("Android"));
    return { platform, courses, basics, ios, android }
  }

export default Team;
