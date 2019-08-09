import Header from '../components/Header';
import Footer from '../components/Footer';

const Apply = (props) => (
  <div>
    <Header />
    <section class="hero is-info is-small">
      <div class="hero-body">
        <div class="container">
          <h1 class="title" style={{color: "azure", fontSize: "2.8rem"}}>
            Come build with us!
          </h1>
          <h2 class="subtitle">
            We're always looking for people to join Labs.
          </h2>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h1 class="title" style={{fontSsize: "2.8rem"}}>
          Why Labs?
        </h1>
        <p>
          Penn Labs is a team of software developers and product designers who build 
          tools, apps, and websites that help students navigate life at Penn.
        </p>
        <br />
        <p>
          We have a large range of projects, but some that you may be familiar 
          with include Penn Course Review, Penn Mobile, and Penn Course Alert. We’ve 
          had more than 100,000 total users of our products, and through the Common Funding Application, 
          we have processed over $930,000 of grants for student clubs and organizations.
        </p>
        <br />
        <h1 class="title">What we're looking for</h1>
        <p>
          What's important to us is that <b>All Penn students are eligible to apply for any position, regardless of major or year</b>. 
          Generally, most of our members fit into these two larger baskets:
        </p> <br />
        <div class="columns">
          <div class="column is-half">
            <div class="card">
              <div class="card-content">
                <h1 class="title">Developers</h1>
                  <p>You’ll be implementing new features for our products, taking designs from our designers and 
                  bringing them to life. Whether you’re interested in frontend web development, iOS programing or 
                  data science, there’s a project that you’ll find interesting. While we look at all applicants, 
                  many of our developers fit into these categories:</p>
                  <p>
                  <ul style={{marginLeft: '2em', listStyle: 'disc'}}>
                    <li>Frontend Web Developer</li>
                    <li>Backend Web Developer</li>
                    <li>iOS Mobile Developer</li>
                    <li>Android Mobile Developer</li>
                    <li>DevOps and Security</li>
                  </ul>
                  </p>
                  
                  <p>If you don’t fit neatly any of these boxes, still apply! 
                  We’d love to learn more about you and help find a place for you in Labs.</p>
              </div>
            </div>
            

          </div>
          <div class="column is-half">
          <div class="card">
              <div class="card-content">
                <h1 class="title">Designers</h1>
                <p>Bring our products to life! Design is an integral part of the development process, and we pride ourselves on our talented designers who can work on everything from branding to complete UX overhauls of our products.</p>
                <br />
                <p>
                If you're interested, Penn Labs gives you the opportunity to go beyond graphic design. Work on the user experience and interfaces of our mobile apps and web sites which impact students every day.
                </p>
                <br />
                <p>
                There's also the opportunity to design flyers, online ads and other marketing material that helps get the word out about our amazing products.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
        </section>

    <section class="section" style={{backgroundColor: "#209CEE", color: "azure"}}>
      <div class="container">
        <p style={{color: "azure", fontSize: "1.5rem", paddingBottom: "1rem"}}><b>Join our mailing list</b> to be notified when applications are released:</p>
        <a href="https://eepurl.com/c07CGb" class="button">Sign me up!</a>
      </div>
    </section>
    <Footer />
  </div>
);

export default Apply;
