import Box from '../../components/Box';

const Products = (props) => (
  <div>
  <section className="section" style={{backgroundColor: "#209CEE", color:"azure"}}>
    <div className="container">
      <h1 className="title" style={{color: "azure", fontSize:"2.8rem"}}>
        Featured Products:
      </h1>
      <h2 className="subtitle" style={{fontSize:"2rem"}}>
        the apps that better your life at <strong>Penn</strong>.
      </h2>
    <br/>
      <div className="columns">
        <div className="column">
          <a href="https://penncoursereview.com/" >
          <Box img="/static/img/PCR.png" imgclassName="image is-64x64" title="Penn Course Review" desc="Aggregated ratings of Penn courses and professors" titleStyle={{paddingTop:"0.5rem", lineHeight:0, fontWeight:500}}/>
          </a>
          <a href="http://pennbasics.com/">
          <Box img="/static/img/PennBasics.png" imgclassName="image is-64x64" title="Penn Basics" desc="Dining, laundry, study space information for desktop" titleStyle={{paddingTop:"0.5rem", lineHeight:0, fontWeight:500}}/>
          </a>
        </div>
        <div className="column">
          <a href="https://penncoursealert.com/">
          <Box img="/static/img/PCA.png" imgclassName="image is-64x64" title="Penn Course Alert" desc="Get notified when courses become available" titleStyle={{paddingTop:"0.5rem", lineHeight:0, fontWeight:500}}/>
          </a>
          <Box img="/static/img/PennMobile.png" imgclassName="image is-64x64" title="Penn Mobile" descChild={<div>Dining, laundry, room reservations for <a href='https://itunes.apple.com/us/app/pennmobile/id944829399?mt=8'>iOS</a> and <a href='https://play.google.com/store/apps/details?id=com.pennapps.labs.pennmobile&hl=en'>Android</a></div>} titleStyle={{paddingTop:"0.5rem", lineHeight:0, fontWeight:500}} />
        </div>
      </div>
      <p>
        We build apps for <i>you</i>. Tell us what you want to see at Penn by contacting us <a href="/contact" style={{textDecoration: "underline", color: "#ffffff"}}>here</a>.
      </p>
    </div>
  </section>
</div>
);

export default Products;
