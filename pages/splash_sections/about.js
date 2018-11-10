import Card from '../../components/Card';

const About = (props) => (
  <div>
    <section className="section">
      <div className="container">
        <h1 className="title" style={{fontSize:"2.8rem"}}>
          About Penn Labs:
        </h1>
        <h2 className="subtitle" style={{fontSize:"2rem"}}>
          our products by the numbers.
        </h2>

        <div className="columns is-multiline">
          <Card titleChild={<p class="title is-3" style={{paddingBottom:"0.5rem"}}><strong style={{color: "#209CEE"}}>100,000+ </strong>total users</p>} desc="across over 10 student-developed applications." />
          <Card titleChild={<p class="title is-3" style={{paddingBottom:"0.5rem"}}><strong style={{color: "#209CEE"}}>60+ </strong> GitHub contributors</p>} desc="building high-quality open source software." />
          <Card titleChild={<p class="title is-3" style={{paddingBottom:"0.5rem"}}><strong style={{color: "#209CEE"}}>7+ </strong> years</p>} desc="of supporting the Penn community at large." />
          <Card titleChild={<p class="title is-3" style={{paddingBottom:"0.5rem"}}><strong style={{color: "#209CEE"}}>$700,000+ </strong>handled</p>} desc="through our Common Funding Application portal." />
        </div>
        <p>Interested in making products that thousands of people use? <a href="/apply"> Join us. </a> </p>
      </div>
    </section>
</div>
);

export default About;
