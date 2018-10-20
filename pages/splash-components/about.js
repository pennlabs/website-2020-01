import Box from '../../components/Box';

const About = (props) => (
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title" style={{fontSize:"2.8rem"}}>
          About Penn Labs:
        </h1>
        <h2 class="subtitle" style={{fontSize:"2rem"}}>
          our products by the numbers.
        </h2>

        <div class="columns  ">
          <div class="column is-half">
            <Box titleChild={<h3 style={{paddingTop:"0.5rem", lineHeight:0, fontSize:"2rem", fontWeight:500}}><strong style={{color: "#209CEE"}}>100,000+ </strong>total users</h3>} desc="across over 10 student-developed applications." />
            <Box titleChild={<h3 style={{paddingTop:"0.5rem", lineHeight:0, fontSize:"2rem", fontWeight:500}}><strong style={{color: "#209CEE"}}>60+ + </strong> GitHub contributors</h3>} desc="building high-quality open source software." />
          </div>
          <div class="column is-half">
            <Box titleChild={<h3 style={{paddingTop:"0.5rem", lineHeight:0, fontSize:"2rem", fontWeight:500}}><strong style={{color: "#209CEE"}}>7+ </strong> years</h3>} desc="of supporting the Penn community at large." />
            <Box titleChild={<h3 style={{paddingTop:"0.5rem", lineHeight:0, fontSize:"2rem", fontWeight:500}}><strong style={{color: "#209CEE"}}>$700,000+ </strong>handled</h3>} desc="through our Common Funding Application portal." />
          </div>
        </div>
        <p>Interested in making products that thousands of people use? <a href="/apply"> Join us. </a> </p>
      </div>
    </section>
</div>
);

export default About;
