import posed from "react-pose";
import React from 'react';

const Square = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.05 }
});

class InfoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false,
    }
  }

  render() {
    return (
      <div className="column is-half">
        <Square
          pose={this.state.hovering ? "hovered" : "idle"}
          onMouseEnter={() => this.setState({ hovering: true })}
          onMouseLeave={() => this.setState({ hovering: false })}>
          <div className="card" style={{borderRadius: 2, borderWidth: 0}}>
            <div className="card-content">
              <div class="media">
                {this.props.img ? (
                  <div class="media-left">
                    <figure class={this.props.imgclassName}>
                      <img src={this.props.img} alt="Placeholder image" />
                    </figure>
                  </div>): <div></div>}
                <div class="content">
                  {this.props.titleChild}
                  {this.props.desc}
                </div>
              </div>
            </div>
          </div>
        </Square>
      </div>)}
    }

export default InfoCard;
