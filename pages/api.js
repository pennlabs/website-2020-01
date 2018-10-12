import Header from '../components/Header';
import Footer from '../components/Footer';

const API = (props) => (
  <div>
    <Header />
    <section class="section">
      <div class="container">
        <h3 class="title is-3" style={{marginBottom:"0.5rem"}}>
          Penn Labs API
        </h3>
        <p>
          The public API routes for our product suite.
        </p>
        <br/>
        <CurrentProducts/>
      </div>
    </section>
    <Footer />
  </div>
);

const CurrentProducts = (props) => (
  <div>
  <div class="tabs">
    <ul>
      <li class="is-active"><a>Current Products</a></li>
      {/* <li><a href="/product-api">APIs</a></li>
      <li><a href="/legacy">Legacy</a></li> */}
    </ul>
  </div>
  <div class="columns">
    <div class="column">
      <ProductApi
        url="https://penncoursereview.com/"
        img="/static/img/PCR.png"
        title="Penn Course Review"
        desc="Penn Course Review allows Penn students to make informed decisions on their course decisions. PCR includes professor rankings, course difficulties, commentary, and more on all courses taught at Penn in the past decade."
      />
      <ProductApi
        url="http://pennbasics.com/"
        img="/img/PennBasics.png"
        title="Penn Basics"
        desc="PennBasics is a one-stop shop for the basics of living at Penn. It strives to make students' lives easier at Penn so they can focus on what matters. PennBasics aggregates essential data on dining, laundry, and study spaces, and tailors the dashboard to your preferences."
      />
      <Product
        url="https://penncfa.com/accounts/login/?next=/"
        img="/img/CFA-logo.png"
        title="Common Funding Application"
        desc="The Common Funding Application allows student groups across the University to easily request funding for their events from one or more funding sources on campus. On the other side of the process, funding groups have the ability to view what groups have applied for funding from them and make approval/denials."
      />
    </div>
    <div class="column">
      <Product
        url="https://penncoursealert.com/"
        img="/img/PCA.png"
        title="Penn Course Alert"
        desc="Penn Course Alert was built to help students get into their desired courses and eliminate the stress behind guessing when it would open. PCA provides high quality, immediate notification via text and email for course availabilities."
      />
      <Product
        url=""
        img="/img/PennMobile.png"
        title="Penn Mobile"
        desc= "Penn Mobile App is the university's first official mobile app. On iOS and Android, PennMobile provides live dining hall menus and hours, course and faculty search, live bus routes, popular sources of campus-news and school support numbers."
      />
      <Product
        url=""
        img="/img/OHQ-logo.png"
        title="Office Hours Queue"
        desc="Coming soon, Office Hours Queue will make office hours easier for both students and teaching assistants. Students: get the one-on-one help that you need, as quickly as possible. TAs: manage your queue, locate students faster, and offer more targeted help."
      />
    </div>
  </div>
  </div>
);

const Product = (props) => (
  <div>
  <div class="box" style={{marginBottom: "1.5rem"}}>
    <div class="card-content">
      <div class="level" style={{marginBottom:"0.5rem"}}>
        <div class="level-left">
          <div class="level-item">
            <p class="image is-48x48">
              <img src={props.img} />
            </p>
          </div>
          <div class="level-item">
            <h1 style={{fontWeight:500, fontSize:"1.8rem"}}>
              {props.title}
            </h1>
          </div>
        </div>
      </div>
      <p>
        {props.desc}
      </p>
      <br/>
      <a href="/api/pcr"> <span class="tag is-info"> View API </span> </a>
    </div>
  </div>
</div>
);

export default Products;
