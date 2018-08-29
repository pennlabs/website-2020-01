import Link from 'next/link';

const Header = () => (
  <div>
    <head>
      <title> PennClubReview </title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous" />
    </head>

    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
      <div class="navbar-menu" id="navMenu">
        <div class="navbar-start">
          <Link href="/">
            <a class="navbar-item">
              <strong> Penn Labs </strong>
            </a>
          </Link>
          <Link href="/about">
            <a class="navbar-item">
              About
            </a>
          </Link>
        </div>
      </div>

      <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </nav>
  </div>
);

export default Header;