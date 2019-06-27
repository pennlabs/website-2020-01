import Header from '../components/Header';
import Footer from '../components/Footer';

const Apply = (props) => (
  <div>
    <Header />
    <section class="hero is-info is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title" style={{color: "azure", fontSize: "2.8rem"}}>
            Build with us.
          </h1>
          <h2 class="subtitle">
            We're always looking for people to join Labs!
          </h2>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h1 class="title" style={{fontSsize: "2.8rem"}}>
          Why Labs?
        </h1>
        <h2 class="subtitle" style={{fontSize: "2rem"}}>
          Because we <span class="icon is-small" style={{color: "#F56F71", marginLeft: "1rem", marginRight: "1rem"}}><i class="fa fa-heart"></i></span> creators.
        </h2>
        
        <div class="columns  ">
          <div class="column is-half">
            <div class="box">
              <div class="card-content">
                <div class="content">
                  <h3>
                    <strong>Iconic Products</strong>
                  </h3>
                  <p style={{paddingTop: "0px"}}>
                    From Penn Course Review to Common Application Funding, we build software that improves the lives of every Penn student.
                    Watching your friends use the products that you helped build is a great way to stay grounded and involved in the community.
                  </p>
                </div>
              </div>
            </div>

            <div class="box">
              <div class="card-content">
                <div class="content">
                  <h3>
                    <strong>Modern Engineering</strong>
                  </h3>
                  <p style={{paddingTop: "0px"}}>
                    We use exclusively open source modern frameworks that are commonly used in the software industry (i.e. React.js, Django, Swift).
                    Our engineers are kept up to date with good coding/deployment practices and we always place an emphasis on becoming better programmers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-half">
            <div class="box">
              <div class="card-content">
                <div class="content">
                  <h3>
                    <strong>Top Talent</strong>
                  </h3>
                  <p style={{paddingTop: "0px"}}>
                    Although skill ranges vary when joining Labs, our current members are at the top of their game. Through Penn Labs' 
                    strong work culture our members are highly sought after, becoming teaching assistants,
                    working for prestigious companies around the world, and launching their own startups.
                  </p>
                </div>
              </div>
            </div>

            <div class="box">
              <div class="card-content">
                <div class="content">
                  <h3>
                    <strong>Lots of Fun</strong>
                  </h3>
                  <p style={{paddingTop: "0px"}}>
                    Penn Labs is a relaxed club who's only goal is to make good software. We're a tightly knit community of friends 
                    that support each other. Penn Labs excursions in Center City are common and are a great way to avoid thinking about bugs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>
    </section>

    <section class="section" style={{backgroundColor: "#209CEE", color: "azure"}}>
      <div class="container">
        <h1 class="title" style={{color: "azure", fontSize: "2.8rem"}}>
          Recruiting for:
        </h1>
        <br />
        <div class="columns">
          <div class="column">
            <a href="https://penncoursereview.com/">
              <div class="box">
                <div class="card-content">
                  <div class="level">
                    <div class="level-left">
                      <div class="level-item">
                        <p class="image is-64x64">
                          <img src="/static/img/PCR.png" />
                        </p>
                      </div>
                      <div class="level-item">
                        <div class="content">
                          <h3 style={{paddingTop: "0.5rem", lineHeight: 0, fontWeight: 500}}>
                            Penn Course Review
                          </h3>
                          <p style={{paddingTop: "0px"}}>
                            Aggregated ratings of Penn courses and professors
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="http://pennbasics.com/">
              <div class="box" style={{marginTop: "1rem"}}>
                <div class="card-content">
                  <div class="level">
                    <div class="level-left">
                      <div class="level-item">
                        <p class="image is-64x64">
                          <img src="/static/img/PennBasics.png" />
                        </p>
                      </div>
                      <div class="level-item">
                        <div class="content">
                          <h3 style={{paddingTop: "0.5rem", lineHeight: 0, fontWeight: 500}}>
                            Penn Basics
                          </h3>
                          <p style={{paddingTop: "0px"}}>
                            Dining, laundry, study space information for desktop
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="column">
            <a href="https://penncoursealert.com/">
              <div class="box">
                <div class="card-content">
                  <div class="level">
                    <div class="level-left">
                      <div class="level-item">
                        <p class="image is-64x64">
                          <img src="/static/img/PCA.png" />
                        </p>
                      </div>
                      <div class="level-item">
                        <div class="content">
                          <h3 style={{paddingTop: "0.5rem", lineHeight: 0, fontWeight: 500}}>
                            Penn Course Alert
                          </h3>
                          <p style={{paddingTop: "0px"}}>
                            Get notified when courses become available
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div class="box" style={{marginTop: "1rem"}}>
              <div class="card-content">
                <div class="level">
                  <div class="level-left">
                    <div class="level-item">
                      <p class="image is-64x64">
                        <img src="/static/img/PennMobile.png" />
                      </p>
                    </div>
                    <div class="level-item">
                      <div class="content">
                        <h3 style={{paddingTop: "0.5rem", lineHeight: 0, fontWeight: 500}}>
                          Penn Mobile
                        </h3>
                        <p style={{paddingTop: "0px"}}>
                          Dining, laundry, room reservations for <a href="https://itunes.apple.com/us/app/pennmobile/id944829399?mt=8">iOS</a> and <a href="https://play.google.com/store/apps/details?id=com.pennapps.labs.pennmobile&hl=en">Android</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>
          ...and many others. Work on these iconic projects, or whichever one fits you best.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h1 class="title">
              What We're Looking For
            </h1>
            <div class="content">
              <blockquote>All Penn students are eligible to apply for any position, regardless of major or year.</blockquote>
              <p>We're looking for individuals with the following skillsets:</p>
              <span class="tag is-info">Front End Development</span> <br />
              <span class="tag is-info">Back End Development</span><br />
              <span class="tag is-info">Mobile Development</span><br />
              <span class="tag is-info">DevOps and Security</span><br />
              <span class="tag is-info">Marketing</span>
              <br /> <br />
              <p>More importantly, we're looking for dedicated students with the capacity to learn. We understand that 
                the best members can come from anywhere, no prior experience necessary.
              </p>
            </div>
            <a href="https://eepurl.com/c07CGb" class="button is-medium">Apply Now</a>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Apply;
