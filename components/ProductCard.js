import posed from 'react-pose'
import React from 'react'

const Square = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.05 },
})

class ProductCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hovering: false,
    }
  }

  render() {
    return (
      <div className="column is-half">
        <Square
          pose={this.state.hovering ? 'hovered' : 'idle'}
          onMouseEnter={() => this.setState({ hovering: true })}
          onMouseLeave={() => this.setState({ hovering: false })}
        >
          <a href={this.props.href}>
            <div className="card" style={{ borderRadius: 5, borderWidth: 0 }}>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    {this.props.img ? (
                      <figure className="image is-64x64">
                        <img src={this.props.img} alt="Placeholder image" />
                      </figure>
                    ) : (
                      <div></div>
                    )}
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <div style={{ paddingBottom: '0.5rem' }}>
                        {this.props.titleChild ? (
                          this.props.titleChild
                        ) : (
                          <p className="title is-4">{this.props.title}</p>
                        )}
                        {this.props.tag}
                      </div>
                      {this.props.descChild
                        ? this.props.descChild
                        : this.props.desc}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </Square>
      </div>
    )
  }
}

export default ProductCard
