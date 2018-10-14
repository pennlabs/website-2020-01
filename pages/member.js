import Header from '../components/Header';
import Footer from '../components/Footer';

const Member = (props) => (
  <div>
    <Header />
    <section class="section" style={{paddingTop:"1.5rem"}}>
      <div class="container" style={{marginTop:0}}>
        <a class="button is-rounded is-primary" href="/team">
          <span class="icon" style={{marginRight: "0.3rem"}}>
            <i class="fas fa-angle-double-left"></i>
          </span>
          Back to team
        </a>
        <br/><br/>
        <br/><br/>

      </div>
    </section>

    <Footer />
  </div>
);

const Bio = (props) => (
  <div class="columns">
    <div class="column is-5">
      <figure class="image is-4by3">
        <img src={"/static/img/members/" + props.username + ".png"} style={{maxWidth:"100%", objectFit: "cover"}} alt={props.username} />
      </figure>
    </div>
    <div class="column">
      <div class="content">
        <div class="card-content">
          <h1 style={{fontWeight:500, fontSize:"1.8rem"}}>
            {props.name}
          </h1>
          <h4 style={{fontSize:"1.2rem", fontStyle: "italic"}}>
            {props.location}
          </h4>
          <p>
            {props.bio}
          </p>
          <br/>
          <nav class="level is-mobile">
            <div class="level-left">
              {props.github ? (
                <a class="level-item" href="{{github}}">
                  <span class="icon"><i class="fab fa-github"></i></span>
                </a>) : <div></div> }
              {props.linkedin ? (
                <a class="level-item" href="{{linkedin}}">
                  <span class="icon"><i class="fab fa-linkedin"></i></span>
                </a>
              ) : <div></div>}
              {props.website ? (
                <a class="level-item" href="{{website}}">
                  <span class="icon"><i class="fas fa-user"></i></span>
                </a>) : <div></div>}
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
);

export default Member;
