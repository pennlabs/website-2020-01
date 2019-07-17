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
          desc="Penn Course Review provides quantitative data on courses and professors to help students make informed decisions about coursework. It includes metrics for course difficulty and quality, professor quality, and more."
        />
        <ProductCard
          href="https://pennbasics.com/"
          img="/static/img/PennBasics.png"
          title="Penn Basics"
          desc="Penn Basics is a one-stop shop for the basics of living at Penn. It strives to make students' lives easier at Penn so they can focus on what matters. PennBasics aggregates essential data on dining, laundry, and study spaces, and tailors the dashboard to your preferences."
        />
        <ProductCard
          href="https://penncoursealert.com/"
          img="/static/img/PCA.png"
          title="Penn Course Alert"
          desc="Penn Course Alert allows students to register for immediate alerts via email or text when full courses open up. Reduce the guesswork and uncertainty in course registration and make sure you get the in-demand courses you want!"
        />
        <ProductCard
          img="/static/img/PennMobile.png"
          title="Penn Mobile"
          desc= "Penn Mobile is the university's first official mobile app. On iOS and Android, Penn Mobile provides live dining hall menus and hours, laundry machine availability, study room booking, top campus news, and school support numbers."
        />
        <ProductCard
          img="/static/img/PCS.png"
          title="Penn Course Search"
          desc="Penn Course Search combines course rating insights with an easy-to-use mock scheduling tool. Choose the best schedule for your semester, with at-a-glance schedule insights and comparisons coming soon!"
        />
        <ProductCard
          href="https://penncfa.com/accounts/login/?next=/"
          img="/static/img/CFA-logo.png"
          title="Common Funding Application"
          desc="The Common Funding Application connects student organizations to various funding sources. Organizations can easily request event funding from a centralized application. Funding boards are able to review applications and ensure accountability."
        />
        <ProductCard
          img="/static/img/pennclubs-logo.png"
          title="Penn Clubs"
          desc="Penn Clubs aims to be the centralized source of information about all student organizations at Penn. Students can discover new clubs, join mailing lists, and view open applications. Clubs can better publicize themselves and their events. To be launched in Fall 2019!"
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
