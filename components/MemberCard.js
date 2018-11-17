import posed from "react-pose";
import React from 'react';


const Square = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.05 }
});

class MemberCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false
    }
  }

  render() {
    return (
      <div className="column is-one-third">
        <Square
          pose={this.state.hovering ? "hovered" : "idle"}
          onMouseEnter={() => this.setState({ hovering: true })}
          onMouseLeave={() => this.setState({ hovering: false })}>
          <a href={"/member?name=" + this.props.member.url}><div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src={this.props.member.photo}
                    style={{maxWidth:"100%", objectFit: "cover"}}
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <h1 style={{fontWeight:500, fontSize:"1.5rem", marginBottom: "1rem"}}>
                  {this.props.member.user.name}
                </h1>
                <div className="tags">
                  <span className="tag is-rounded">{this.props.member.user.major}</span>
                  {this.props.member.teams.map((team) =>
                    <span className="tag is-rounded">{team.name}</span>
                  )}
                  {this.props.member.roles.map((role) =>
                    <span className="tag is-rounded">{role.name}</span>
                  )}
                </div>
              </div>
            </div>
            </a>
        </Square>
      </div>

    )}
  }

  export default MemberCard;
