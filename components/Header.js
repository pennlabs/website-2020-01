import Link from 'next/link';
import { Spring, Keyframes, config } from 'react-spring'
import React from 'react'

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isActive: false,
    }
  }

  toggleNav = () => {
    console.log(!this.state.isActive);
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    return (
      <div>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Penn Labs</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css" />
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
          <link rel="stylesheet" href="styles/style.css" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous" />
        </head>

        <nav className="navbar is-info" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
            <img
              src="/static/img/beaker-only.png"
              alt="Penn Labs"
              width="auto"
              height="100" />
            </a>
            <button className="button navbar-burger is-info" onClick={this.toggleNav}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
            <div className="navbar-start"></div>
            <div className="navbar-end">
              <a className="navbar-item" href="/team">
                Team
              </a>
              <a className="navbar-item" href="/products">
                Products
              </a>
              <a className="navbar-item" href="/resources">
                Resources
              </a>
              <a className="navbar-item" href="https://medium.com/@pennappslabs">
                Blog
              </a>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}




export default Header;
