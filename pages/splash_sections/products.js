import ProductCard from '../../components/ProductCard';

const Products = (props) => (
  <div>
  <section className="section" style={{backgroundColor: "#209CEE", color:"azure"}}>
    <div className="container">
      <h1 className="title has-text-weight-bold" style={{color: "azure", fontSize:"2.8rem"}}>
        Featured Products:
      </h1>
      <h2 className="subtitle" style={{fontSize:"2rem"}}>
        the apps that better your life at <strong>Penn</strong>.
      </h2>
    <br/>
      <div className="columns is-multiline">
        <ProductCard href="https://penncoursereview.com/" img="/static/img/PCR.png" imgClassName="image is-64x64" title="Penn Course Review" desc="Penn Course Review provides quantitative data on courses and professors to help students make informed decisions about coursework. It includes metrics for course difficulty and quality, professor quality, and more." />
        <ProductCard href="http://pennbasics.com/" img="/static/img/PennBasics.png" imgClassName="image is-64x64" title="Penn Basics" desc="Penn Basics aims to be your the one-stop spot for the basics of living at Penn. It aggregates essential data on dining, laundry, and study spaces. To be launched in Fall 2019!" />
        <ProductCard href="https://penncoursealert.com/" img="/static/img/PCA.png" imgClassName="image is-64x64" title="Penn Course Alert" desc="Penn Course Alert allows students to register for immediate alerts via email or text when full courses open up. Reduce the guesswork and uncertainty in course registration and make sure you get the in-demand courses you want!" />
        <ProductCard href="https://itunes.apple.com/us/app/penn-mobile/id944829399?mt=8" img="/static/img/PennMobile.png" imgClassName="image is-64x64" title="Penn Mobile" desc="Penn Mobile is the university's first official mobile app. On iOS and Android, Penn Mobile provides live dining hall menus and hours, laundry machine availability, study room booking, top campus news, and school support numbers."  />
        <ProductCard href="https://penncoursesearch.com/" img="/static/img/PCS.png" imgClassName="image is-64x64" title="Penn Course Search" desc="Penn Course Search combines course rating insights with an easy-to-use mock scheduling tool. Choose the best schedule for your semester, with at-a-glance schedule insights and comparisons coming soon!"  />
        <ProductCard href="https://penncfa.com/" img="/static/img/CFA-logo.png" imgClassName="image is-64x64" title="Common Funding Application" desc="The Common Funding Application connects student organizations to various funding sources. Organizations can easily request event funding from funding boards they qualify to receive support from. Funding boards are able to review applications, communicate with applicant groups, and ensure accountability." />
      </div>
      <div className="is-flex" style={{alignItems: "flex-end", justifyContent: "flex-end"}}>
        <p>
          View our privacy policies <a href="/privacy" style={{textDecoration: "underline", color: "#ffffff"}}>here</a>.
        </p>
      </div>
    </div>
  </section>
</div>
);

export default Products;
