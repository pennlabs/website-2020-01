import Link from 'next/link';

const Header = () => (
  <div>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Penn Labs</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css" />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <link rel="stylesheet" href="styles/style.css" />
      <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
    </head>

    <nav class="navbar is-info" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img
            src="/static/img/beaker-only.png"
            alt="Penn Labs"
            height="100px"
            width="auto"
          />
        </a>

        <div class="button navbar-burger is-info" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu" id="navMenu">
        <div class="navbar-start"></div>
        <div class="navbar-end">
          <a class="navbar-item" href="/team">
            Team
          </a>
          <a class="navbar-item" href="/products">
            Products
          </a>
          <a class="navbar-item" href="/api">
            API
          </a>
          <a class="navbar-item" href="/guides">
            Guides
          </a>
          <a class="navbar-item" href="https://medium.com/@pennappslabs">
            Blog
          </a>
        </div>
      </div>
    </nav>
  </div>
);

export default Header;
