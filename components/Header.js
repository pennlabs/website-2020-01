import React, { useState } from 'react'

import '../styles/styles.sass'

const Header = () => {
  const [active, setActive] = useState(false)

  return (
    <div>
      <nav className="navbar is-info" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img
              src="/static/img/beaker-only.png"
              alt="Penn Labs"
              width="auto"
              height="100"
            />
          </a>
          <button
            className="button navbar-burger is-info"
            onClick={() => setActive(!active)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={active ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-start"></div>
          <div className="navbar-end">
            <a className="navbar-item" href="/members">
              Members
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

export default Header
