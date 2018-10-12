import Header from '../components/Header';
import Footer from '../components/Footer';

const getMembers = () => {

}

const Team = (props) => (
  <div>
    <Header />
    <div class="container">
      <h3 class="title is-3" style="margin-bottom:0.5rem">
        Meet the Team
      </h3>
      <p>
        The brilliant minds behind the products that tens of thousands
        of students use. Also check out our <a href="/alumni">Alumni</a>!
      </p>
    <br/><br/>
    <Members members={getMembers()}/>
    </div>
    <Footer />
  </div>
);

const Members = (props) => (
  <div class="columns is-multiline">
    {props.members.map((member) => {
      <div class="column is-one-third">
        <a href={"/team/" + member.username}>
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src={"/img/members/" + member.username + ".png"}
                  style={{maxWidth:"100%", objectFit: "cover"}}
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <h1 style={{fontWeight:500, fontSize:"1.5rem", marginBottom: "1rem"}}>
                {member.name}
              </h1>
              <div class="tags">
                <span class="tag is-rounded">{member.major}</span>
                <span class="tag is-rounded">{member.role}</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    })}
  </div>
);

export default Team;
