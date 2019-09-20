import posed from 'react-pose'
import React from 'react'

const roleColors = {
  Designer: '#E4D9FF',
  Developer: '#C1F5E9',
  Director: '#FFEAB6',
  Business: '#D1F7C4',
}

const Square = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.05 },
})

class AlumniCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hovering: false,
    }
  }

  render() {
    return (
      <div className="column is-one-third">
        <Square
          pose={this.state.hovering ? 'hovered' : 'idle'}
          onMouseEnter={() => this.setState({ hovering: true })}
          onMouseLeave={() => this.setState({ hovering: false })}
        >
          <a href={'/member?name=' + this.props.alum.website}>
            <div className="card" style={{ borderRadius: 5, borderWidth: 0 }}>
              <div className="card-content">
                <h1
                  class="has-text-weight-bold"
                  style={{
                    fontWeight: 500,
                    fontSize: '1.5rem',
                    marginBottom: 0,
                    paddingBottom: 0,
                  }}
                >
                  {this.props.alum.student.name +
                    " '" +
                    this.props.alum.graduation_year}
                </h1>
                <em style={{ fontSize: 14, paddingTop: 0, marginTop: 0 }}>
                  {' '}
                  {this.props.alum.job + ' @ ' + this.props.alum.company}{' '}
                </em>
                <div style={{ display: 'flex', marginTop: 10 }}>
                  <p className="is-size-6 has-text-grey-light">Roles: </p>
                  <div className="tags" style={{ paddingLeft: 5 }}>
                    {this.props.alum.roles.map(role => (
                      <span
                        className="tag is-rounded"
                        style={{ backgroundColor: roleColors[`${role}`] }}
                      >
                        {role}
                      </span>
                    ))}
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

export default AlumniCard
