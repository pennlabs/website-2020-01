const Intro = (props) => (
  <div>
  <section class="section">
    <div class="container">
      <div class="columns ">
        <div class="column is-6" style={{paddingTop:"3rem"}}>
          <h1 class="title" style={{fontSize:"2.8rem"}}>
          Hi, we're Penn Labs:
          </h1>
          <h2 class="subtitle" style={{fontSize:"2rem"}}>
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
          <a href="/products" class="button is-medium"> View Products </a>
        </div>
        <div class="column is-5" style={{paddingLeft:"4rem", marginLeft:"2rem"}}>
          <figure class="image">
          <img src="/static/img/test-hero.png" />
          </figure>
        </div>
      </div>
    </div>
  </section>
</div>
);

export default Intro;
