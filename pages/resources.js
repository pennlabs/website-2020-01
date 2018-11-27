import Header from '../components/Header';
import Footer from '../components/Footer';
import Table from '../components/Table';

const Guides = (props) => (
  <div>
    <Header />
    <div className="container">
      <Table
        title="Labs Resources"
        img="/static/img/undraw_data.png"
        desc="We're dedicated to giving back to the community - here are some resources, guides and tutorials we've written to help everybody build products like ours."
        col1="Guide"
        col2="Link"
        data={[
          {col1:{text: "Public API Documentation"}, col2:{text:"Penn Labs", link:"/api"}},
          {col1:{text: "Penn OpenData APIs"}, col2:{text:"Docs", link:"https://esb.isc-seo.upenn.edu/8091/documentation#directory"}},
          {col1:{text: "Penn OpenData Python SDK"}, col2:{text:"Docs and Source", link:"https://github.com/pennlabs/penn-sdk-python"}},
          {col1:{text: "Penn OpenData Node SDK"}, col2:{text:"Docs and Source", link:"https://github.com/pennlabs/penn-sdk-node"}},
          {col1:{text: "Penn OpenData Ruby SDK (alpha)"}, col2:{text:"Docs and Source", link:"https://github.com/pennlabs/penn-sdk-ruby"}}
        ]}
        style={{width: 400}}
      />
    </div>
    <Footer />
  </div>
);

export default Guides;
