import Header from '../components/Header';
import Footer from '../components/Footer';
import Table from '../components/Table';

const Guides = (props) => (
  <div>
    <Header />
    <div className="container">
    <Table
    title="Labs Guides"
    img="/static/img/undraw_data.png"
    desc="We're dedicated to giving back to the community - here are some guides and tutorials we've written to help everybody build products like ours."
    col1="Guide"
    col2="Link"
    data={[{col1:{text: "Public API Documentation"}, col2:{text:"Penn Labs", link:"/api"}}]}
    style={{width: 400}}
    />
    </div>
    <Footer />
    </div>
);

export default Guides;
