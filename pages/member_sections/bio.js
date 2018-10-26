
const Bio = (props) => (
  <div className="columns">
    <div className="column is-5">
      <figure className="image is-4by3">
        <img src={""} style={{maxWidth:"100%", objectFit: "cover"}} alt={props.member.user.name} />
      </figure>
    </div>
    <div className="column">
      <div className="content">
        <div className="card-content">
          <h1 style={{fontWeight:500, fontSize:"1.8rem"}}>
            {props.member.user.name}
          </h1>
          <h4 style={{fontSize:"1.2rem", fontStyle: "italic"}}>
            {props.member.location}
          </h4>
          <p>
            {props.member.bio}
          </p>
          <br/>
          <nav className="level is-mobile">
            <div className="level-left">
              {props.member.github ? (
                <a className="level-item" href="{{github}}">
                  <span className="icon"><i className="fab fa-github"></i></span>
                </a>) : <div></div> }
              {props.member.linkedin ? (
                <a className="level-item" href="{{linkedin}}">
                  <span className="icon"><i className="fab fa-linkedin"></i></span>
                </a>
              ) : <div></div>}
              {props.member.website ? (
                <a className="level-item" href="{{website}}">
                  <span className="icon"><i className="fas fa-user"></i></span>
                </a>) : <div></div>}
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
);

export default Bio;
