import Link from 'next/link';

const styles = {
    right: 0,
    bottom: 0,
    left: 0,
    paddingBottom: "2rem",
    height: "8rem",
}

const Footer = (props) => (
  <div>
    <footer class="footer" style={styles}>
      <div class="container">
        <div class="content has-text-centered">
          <p style={{fontSize: "0.85rem"}}>
            Made with <span class="icon is-small" style={{color:"#F56F71"}}><i class="fa fa-heart"></i></span> by Penn Labs
          </p>
          <a href="https://github.com/pennlabs/" style={{marginRight:"1rem"}}>
          <span><i class="fab fa-github"></i></span>
        </a>
        <a href="https://www.facebook.com/labsatpenn/">
        <span><i class="fab fa-facebook-square"></i></span>
      </a>
    </div>
  </div>
</footer>
</div>
);

export default Footer;
