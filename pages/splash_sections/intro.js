const Intro = (props) => (
  <div>
  <section className="section">
    <div className="container">
      <div className="columns ">
        <div className="column is-6" style={{paddingTop:"3rem"}}>
          <h1 className="title" style={{fontSize:"2.8rem"}}>
          Hi, we're Penn Labs:
          </h1>
          <h2 className="subtitle" style={{fontSize:"2rem"}}>
          a team of student <strong>software engineers</strong>, <strong>product designers</strong>, and <strong>business developers.</strong>
          </h2>
          <p style={{fontSize:"1.2rem"}}>
          Penn Labs empowers others to make connections: connections to resources, connections to people, and connections to the greater Penn community.
          </p>
          <br />
          <p style={{fontSize:"1.2rem"}}>
          Our ultimate goal is improving the Penn community. We aim to do so not only by creating high-quality products, but also by giving back to the community with educational resources and technical support.
          </p>
          <br />
          <a href="/products" className="button is-medium"> View Products </a>
        </div>
        <div className="column is-5" style={{paddingLeft:"4rem", marginLeft:"2rem"}}>
          <figure className="image">
          <img src="/static/img/test-hero.png" />
          </figure>
        </div>
      </div>
    </div>
  </section>
</div>
);

export default Intro;
