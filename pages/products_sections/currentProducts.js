import ProductCard from '../../components/ProductCard';

const CurrentProducts = (props) => (
  <div>
    <div className="tabs">
      <ul>
        <li className="is-active"><a>Current Products</a></li>
        {/* <li><a href="/product-api">APIs</a></li>
        <li><a href="/legacy">Legacy</a></li> */}
      </ul>
    </div>
    <div className="columns is-multiline">
        <ProductCard
          href="https://penncoursereview.com/"
          img="/static/img/PCR.png"
          title="Penn Course Review"
          desc="Penn Course Review allows Penn students to make informed decisions on their course decisions. PCR includes professor rankings, course difficulties, commentary, and more on all courses taught at Penn in the past decade."
        />
        <ProductCard
          href="https://pennbasics.com/"
          img="/static/img/PennBasics.png"
          title="Penn Basics"
          desc="PennBasics is a one-stop shop for the basics of living at Penn. It strives to make students' lives easier at Penn so they can focus on what matters. PennBasics aggregates essential data on dining, laundry, and study spaces, and tailors the dashboard to your preferences."
        />
        <ProductCard
          href="https://penncoursealert.com/"
          img="/static/img/PCA.png"
          title="Penn Course Alert"
          desc="Penn Course Alert was built to help students get into their desired courses and eliminate the stress behind guessing when it would open. PCA provides high quality, immediate notification via text and email for course availabilities."
        />
        <ProductCard
          img="/static/img/PennMobile.png"
          title="Penn Mobile"
          desc= "Penn Mobile is the university's first official mobile app. On iOS and Android, PennMobile provides live dining hall menus and hours, laundry machine availability, study room booking, course and faculty search, popular sources of campus-news and school support numbers."
        />
        <ProductCard
          href="https://penncfa.com/accounts/login/?next=/"
          img="/static/img/CFA-logo.png"
          title="Common Funding Application"
          desc="The Common Funding Application allows student groups across the University to easily request funding for their events from one or more funding sources on campus. On the other side of the process, funding groups have the ability to view what groups have applied for funding from them and make approval/denials."
        />
        <ProductCard
          img="/static/img/OHQ-logo.png"
          title="Office Hours Queue"
          desc="Coming soon, Office Hours Queue will make office hours easier for both students and teaching assistants. Students: get the one-on-one help that you need, as quickly as possible. TAs: manage your queue, locate students faster, and offer more targeted help."
        />
    </div>
  </div>
);

export default CurrentProducts;
