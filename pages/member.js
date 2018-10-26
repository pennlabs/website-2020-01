import Header from '../components/Header';
import Footer from '../components/Footer';
import Bio from './member_sections/bio.js';
import fetch from 'isomorphic-fetch';


const Member = (props) => {
  console.log(props);
return (
  <div>
    <Header />
    <section className="section" style={{paddingTop:"1.5rem"}}>
      <div className="container" style={{marginTop:0}}>
        <a className="button is-rounded is-primary" href="/team">
          <span className="icon" style={{marginRight: "0.3rem"}}>
            <i className="fas fa-angle-double-left"></i>
          </span>
          Back to team
        </a>
        <br/><br/>
        <br/><br/>

      </div>
    </section>
    <Bio member={props.member}/>
    <Footer />
  </div>
);
}

Member.getInitialProps = async({ query }) => {
  const res = await fetch('http://platform.pennlabs.org/api/members/?format=json')
  const members = await res.json()
  var member;
  members.forEach((item) => {
    if(item.user.name === query.name) {
      member = item;
    }
  });
  if(member) return { member };
  else return { };
}

export default Member;
