import Header from '../components/Header';
import Footer from '../components/Footer';


const Splash = (props) => (
  <div>
    <Header />
    <Intro />
    <Products />
    <About />
    <News />
    <Contact />
    <Footer />
  </div>
);

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

const Products = (props) => (
  <div>
  <section class="section" style={{backgroundColor: "#209CEE", color:"azure"}}>
    <div class="container">
      <h1 class="title" style={{color: "azure", fontSize:"2.8rem"}}>
        Featured Products:
      </h1>
      <h2 class="subtitle" style={{fontSize:"2rem"}}>
        the apps that better your life at <strong>Penn</strong>.
      </h2>
    <br/>
      <div class="columns">
        <div class="column">
          <a href="https://penncoursereview.com/" >
            <div class="box" style={{marginBottom: "1.5rem"}}>
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
                        <h3 style={{paddingTop:"0.5rem", lineHeight:0, fontWeight:500}}>
                          Penn Course Review
                        </h3>
                        <p style={{paddingTop:0}}>
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
            <div class="box">
              <div class="card-content">
                <div class="level">
                  <div class="level-left">
                    <div class="level-item">
                      <p class="image is-64x64">
                        <img src="/static/img/PennBasics.png"/>
                      </p>
                    </div>
                    <div class="level-item">
                      <div class="content">
                        <h3 style={{paddingTop:"0.5rem", lineHeight:0, fontWeight:500}}>
                          PennBasics
                        </h3>
                        <p style={{paddingTop:0}}>
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
            <div class="box" style={{marginBottom: "1.5rem"}}>
              <div class="card-content">
                <div class="level">
                  <div class="level-left">
                    <div class="level-item">
                      <p class="image is-64x64">
                        <img src="/static/img/PCA.png"/>
                      </p>
                    </div>
                    <div class="level-item">
                      <div class="content">
                        <h3 style={{paddingTop:"0.5rem", lineHeight:0, fontWeight:500}}>
                          Penn Course Alert
                        </h3>
                        <p style={{paddingTop:0}}>
                          Get notified when courses become available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <div class="box" style={{marginBottom: "1.5rem"}}>
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
                      <h3 style={{paddingTop:"0.5rem", lineHeight:0, fontWeight:500}}>
                        Penn Mobile
                      </h3>
                      <p style={{paddingTop:0}}>
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
        We build apps for <i>you</i>. Tell us what you want to see at Penn by contacting us <a href="/contact" style={{textDecoration: "underline", color: "#ffffff"}}>here</a>.
      </p>
    </div>
  </section>
</div>
);

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
            <div class="box" style={{marginBottom: "1.5rem"}}>
              <div class="card-content">
                <div class="content">
                  <h3 style={{paddingTop:"0.5rem", lineHeight:0, fontSize:"2rem", fontWeight:500}}>
                    <strong style={{color: "#209CEE"}}>100,000+</strong> total users
                  </h3>
                  <p style={{paddingTop:0}}>
                    across over 10 student-developed applications.
                  </p>
                </div>
              </div>
            </div>

            <div class="box" style={{marginBottom: "1.5rem"}}>
              <div class="card-content">
                <div class="content">
                  <h3 style={{paddingTop:"0.5rem", lineHeight:0, fontSize:"2rem", fontWeight:500}}>
                    <strong style={{color: "#209CEE"}}>60+</strong> GitHub contributors
                  </h3>
                  <p style={{paddingTop:0}}>
                    building high-quality open source software.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-half">
            <div class="box" style={{marginBottom: "1.5rem"}}>
              <div class="card-content">
                <div class="content">
                  <h3 style={{paddingTop:"0.5rem", lineHeight:0, fontSize:"2rem", fontWeight:500}}>
                    <strong style={{color: "#209CEE"}}>7+</strong> years
                  </h3>
                  <p style={{paddingTop:0}}>
                    of supporting the Penn community at large.
                  </p>
                </div>
              </div>
            </div>

            <div class="box" style={{marginBottom: "1.5rem"}}>
              <div class="card-content">
                <div class="content">
                  <h3 style={{paddingTop:"0.5rem", lineHeight:0, fontSize:"2rem", fontWeight:500}}>
                    <strong style={{color: "#209CEE"}}>$700,000+</strong> handled
                  </h3>
                  <p style={{paddingTop:0}}>
                    through our Common Funding Application portal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p>Interested in making products that thousands of people use? <a href="/apply"> Join us. </a> </p>
      </div>
    </section>
</div>
);

const News = (props) => (
  <div>
    <section class="section" style={{backgroundColor: "#209CEE", color:"azure"}}>
      <div class="container">
        <h1 class="title" style={{fontSize:"2.8rem", color: "azure"}}>
          Product News:
        </h1>
        <h2 class="subtitle" style={{fontSize:"2rem"}}>
          the latest updates from <strong>Penn Labs</strong>.
        </h2>
        <p style={{color: "azure"}}> Coming soon! </p>
      </div>
    </section>
</div>
);

const Contact = (props) => (
  <div>
    <section class="section">
      <div class="container">
        <div class="levels">
          <div class="level-left">
            <div class="level-item">
            <h1 class="title" style={{fontSize:"2.8rem"}}>
             Get In Touch:
            </h1>
          </div>
            <div class="level-item">
              <p class="image">
                <img src="/static/img/undraw_mailbox.png" style={{height:"10rem", width:"auto"}}/>
              </p>
            </div>
          </div>
        </div>
        <p>
          We build tools for Penn students. Your feedback as users means everything to us. <br/> Is there something we can do better? Want to learn more about Labs? Submit bug fixes, new feature suggestions, questions, and comments here!
        </p>
        <br/>
        <div style={{width:"60%"}}>
          <form action="https://formspree.io/contact@pennlabs.org" method="POST">
            <div class="field">
              <label class="label has-text-weight-semibold">
                Name (optional)
              </label>
              <div class="control">
                  <input class="input" type="text" placeholder="Hi there!" name="name" />
              </div>
            </div>
            <div class="field">
              <label class="label has-text-weight-semibold">
                Email (optional)
              </label>
              <div class="control">
                  <input class="input" type="email" placeholder="We'll send our response to this email" name="email"/>
              </div>
            </div>
            <div class="field">
              <label class="label has-text-weight-semibold">
                Message
              </label>
              <div class="control">
                <textarea class="textarea" placeholder="What's up?" name="message"></textarea>
              </div>
            </div>
            <div class="field" style={{width:"100%"}}>
              <div class="control clear" style={{textAlign:"left"}}>
                <button class="button is-medium">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
</div>
);

export default Splash;
