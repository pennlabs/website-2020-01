import ProductBox from '../../components/ProductBox';

const CurrentProductsAPI = (props) => (
  <div>
  <div className="tabs">
    <ul>
      <li className="is-active"><a>Current Products</a></li>
      {/* <li><a href="/product-api">APIs</a></li>
      <li><a href="/legacy">Legacy</a></li> */}
    </ul>
  </div>
  <div className="columns">
    <div className="column">
      <ProductBox
        tag={<a href="/api/pcr"> <span className="tag is-info">View API</span> </a>}
        img="/static/img/PCR.png"
        title="Penn Course Review"
        desc="Penn Course Review allows Penn students to make informed decisions on their course decisions. PCR includes professor rankings, course difficulties, commentary, and more on all courses taught at Penn in the past decade."
      />
      <ProductBox
        tag={<a href="/api/basics"> <span className="tag is-info">View API</span> </a>}
        img="/static/img/PennBasics.png"
        title="Penn Basics"
        desc="PennBasics is a one-stop shop for the basics of living at Penn. It strives to make students' lives easier at Penn so they can focus on what matters. PennBasics aggregates essential data on dining, laundry, and study spaces, and tailors the dashboard to your preferences."
      />
      <ProductBox
        tag={<span className="tag">Coming soon!</span>}
        img="/static/img/CFA-logo.png"
        title="Common Funding Application"
        desc="The Common Funding Application allows student groups across the University to easily request funding for their events from one or more funding sources on campus. On the other side of the process, funding groups have the ability to view what groups have applied for funding from them and make approval/denials."
      />
    </div>
    <div className="column">
      <ProductBox
        tag={<span className="tag">Coming soon!</span>}
        img="/static/img/PCA.png"
        title="Penn Course Alert"
        desc="Penn Course Alert was built to help students get into their desired courses and eliminate the stress behind guessing when it would open. PCA provides high quality, immediate notification via text and email for course availabilities."
      />
      <ProductBox
        tag={<a href="/api/mobile"> <span className="tag is-info">View API</span> </a>}
        img="/static/img/PennMobile.png"
        title="Penn Mobile"
        desc= "Penn Mobile App is the university's first official mobile app. On iOS and Android, PennMobile provides live dining hall menus and hours, course and faculty search, live bus routes, popular sources of campus-news and school support numbers."
      />
      <ProductBox
        tag={<span className="tag">Coming soon!</span>}
        img="/static/img/OHQ-logo.png"
        title="Office Hours Queue"
        desc="Coming soon, Office Hours Queue will make office hours easier for both students and teaching assistants. Students: get the one-on-one help that you need, as quickly as possible. TAs: manage your queue, locate students faster, and offer more targeted help."
      />
    </div>
  </div>
  </div>
);

export default CurrentProductsAPI;
