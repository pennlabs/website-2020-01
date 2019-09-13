import InfoCard from '../../components/InfoCard';

const About = (props) => (
  <div>
    <section className="section">
      <div className="container">
        <h1 className="title has-text-weight-bold" style={{fontSize:"2.8rem"}}>
          About Penn Labs:
        </h1>
        <h2 className="subtitle" style={{fontSize:"2rem"}}>
          the people behind the products.
        </h2>
        <div className="columns is-multiline">
          <InfoCard titleChild={<p class="title is-3" style={{paddingBottom:"0.5rem"}}><strong class="has-text-weight-bold" style={{color: "#209CEE"}}>100,000+ </strong>total users</p>} desc="across over 10 student-developed applications." />
          <InfoCard titleChild={<p class="title is-3" style={{paddingBottom:"0.5rem"}}><strong class="has-text-weight-bold" style={{color: "#209CEE"}}>60+ </strong> GitHub contributors</p>} desc="building high-quality open source software." />
          <InfoCard titleChild={<p class="title is-3" style={{paddingBottom:"0.5rem"}}><strong class="has-text-weight-bold" style={{color: "#209CEE"}}>7+ </strong> years</p>} desc="of supporting the Penn community at large." />
          <InfoCard titleChild={<p class="title is-3" style={{paddingBottom:"0.5rem"}}><strong class="has-text-weight-bold" style={{color: "#209CEE"}}>$930,000+ </strong>handled</p>} desc="through our Common Funding Application portal." />
        </div>
        <figure class="image">
          <img src="https://i.imgur.com/CmhAG25.jpg" />
        </figure>
        <br />
        {/* <a class="button is-success is-medium" href="/apply"> Do think we look cool? Join Us <span class="icon is-small" style={{marginLeft: "0.1rem"}}><i class="fa fa-angle-double-right"></i></span> </a> */}
      </div>
    </section>
</div>
);

export default About;
