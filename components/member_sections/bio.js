import Link from "next/link"

var Converter = require('react-showdown').Converter
var rConverter = new Converter()

const Bio = props => (
  <div className="columns">
    <div className="column is-5">
      <figure className="image">
        <img
          src={props.member.photo}
          style={{ maxWidth: '100%', objectFit: 'cover' }}
          alt={props.member.student.name}
        />
      </figure>
    </div>
    <div className="column">
      <div className="content">
        <div className="card-content">
          <h1
            style={{ fontWeight: 500, fontSize: '1.8rem', fontWeight: '800' }}
          >
            {props.member.student.name}
          </h1>
          <h4 style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>
            {props.member.location}
          </h4>
          {rConverter.convert(props.member.bio)}
          <nav className="level is-mobile">
            <div className="level-left">
              {props.member.github ? (
                <Link href={props.member.github}>
                  <a className="level-item">
                    <span className="icon">
                      <i className="fab fa-github"></i>
                    </span>
                  </a>
                </Link> 
              ) : (
                <div></div>
              )}
              {props.member.linkedin ? (
                <Link href={props.member.linkedin}>
                  <a className="level-item" >
                    <span className="icon">
                      <i className="fab fa-linkedin"></i>
                    </span>
                  </a>
                </Link>
              ) : (
                <div></div>
              )}
              {props.member.website ? (
                <Link href={props.member.website}>
                  <a className="level-item">
                    <span className="icon">
                      <i className="fas fa-user"></i>
                    </span>
                  </a>
                </Link>
              ) : (
                <div></div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
)

export default Bio
