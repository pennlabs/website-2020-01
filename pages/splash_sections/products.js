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
        <ProductCard href="https://penncoursereview.com/" img="/static/img/PCR.png" imgClassName="image is-64x64" title="Penn Course Review" desc="Aggregated ratings of Penn courses and professors" />
        <ProductCard href="http://pennbasics.com/" img="/static/img/PennBasics.png" imgClassName="image is-64x64" title="Penn Basics" desc="Dining, laundry, study space information for desktop" />
        <ProductCard href="https://penncoursealert.com/" img="/static/img/PCA.png" imgClassName="image is-64x64" title="Penn Course Alert" desc="Get notified when courses become available" />
        <ProductCard href="https://penncoursealert.com/" img="/static/img/PennMobile.png" imgClassName="image is-64x64" title="Penn Mobile" desc="Dining, laundry, room reservations for iOS and Android"  />
      </div>
      <p>
        We build apps for <i>you</i>. Tell us what you want to see at Penn by contacting us <a href="/contact" style={{textDecoration: "underline", color: "#ffffff"}}>here</a>.
      </p>
    </div>
  </section>
</div>
);

export default Products;
