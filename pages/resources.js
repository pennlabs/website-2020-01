import Header from '../components/Header';
import Footer from '../components/Footer';
import Table from '../components/Table';
import ProductCard from '../components/ProductCard';

const Resources = (props) => (
  <div>
    <Header />    
      <div class="container" style={{marginTop: "5rem"}}>
        <div className="columns">
          <div className="column is-half">
            <h1 class="title">
              Resources
            </h1>
            <h2 class="subtitle">
              Tutorials and data for building your own products.
            </h2>
            <p>
              We're dedicated to giving back to the community - here are some guides and tutorials we've written to help everybody build products like ours.
              We also maintain free APIs and SDKs with support for Javascript, Python, Ruby and OAuth.
            </p>
            <hr />
            {props.resources.map((resource) => (
              <div class="card" style={{borderRadius:"5px", marginBottom: "1rem"}}>
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img src={resource.src} alt="Placeholder image" />
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">{resource.title}</p>
                      <p class="subtitle is-6">
                        {resource.tags.map((tag) => <span style={{marginRight: "0.2rem"}} class="tag is-light">{tag}</span>)}
                      </p>
                    </div>
                  </div>
                  <div class="content">
                    <a href={resource.demo} style={{marginRight: "0.2rem"}} className="button">Demo</a> 
                    <a href={resource.documentation} className="button">Documentation</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="column is-quarter" style={{align: "right"}} />
          <div className="column is-quarter" >
            <figure class="image" style={{width: "200px"}}>
              <img src="/static/img/stack.png" />
              <br />
            </figure>
          </div>
        </div>
      </div>
      <br />
    <Footer />
  </div>
);

Resources.getInitialProps = async({ }) => {
  const resources = [
    { 
      title: "Penn SDK", 
      src: "/static/img/PCS.png",
      tags: ['Python', 'SDK'], 
      demo: "https://data.pennlabs.org", 
      documentation: "https://penn-sdk.readthedocs.io/"
    },
    { 
      title: "Penn Mobile", 
      src: "/static/img/PennMobile.png",
      tags: ['JSON', 'REST API'], 
      demo: "https://data.pennlabs.org", 
      documentation: "https://github.com/pennlabs/labs-api-server"
    },
    { 
      title: "Penn Course Review", 
      src: "/static/img/PCR.png",
      tags: ['JSON', 'REST API'], 
      demo: "https://data.pennlabs.org", 
      documentation: "https://github.com/pennlabs/pcr/blob/master/docs/api.md"
    },
  ]
  return { resources };
}

export default Resources;
