import Header from '../components/Header';
import Footer from '../components/Footer';
import Table from '../components/Table';
import ProductCard from '../components/ProductCard';

const Guides = (props) => (
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
            <div class="card" style={{borderRadius:"5px"}}>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="/static/img/pcr.png" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Penn Course Review</p>
                    <p class="subtitle is-6"><span class="tag is-light">JSON</span> <span class="tag is-light">REST API</span></p>
                  </div>
                </div>
                <div class="content">
                  <a href="https://platform.pennlabs.org" className="button">Demo</a> 
                  <a href="https://github.com/pennlabs/pcr/blob/master/docs/api.md" className="button">Documentation</a>
                </div>
              </div>
            </div>
            <br />
            <div class="card" style={{borderRadius:"5px"}}>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="/static/img/pennmobile.png" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Penn Mobile</p>
                    <p class="subtitle is-6"><span class="tag is-light">JSON</span> <span class="tag is-light">REST API</span></p>
                  </div>
                </div>
                <div class="content">
                  <a href="https://platform.pennlabs.org" className="button">Demo</a> 
                   <a href="https://github.com/pennlabs/labs-api-server" className="button">Documentation</a>
                </div>
              </div>
            </div>
            <br />
            <div class="card" style={{borderRadius:"5px"}}>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="/static/img/pcs.png" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Penn SDK</p>
                    <p class="subtitle is-6"><span class="tag is-light">Python</span> <span class="tag is-light">SDK</span></p>
                  </div>
                </div>
                <div class="content">
                  <a href="https://platform.pennlabs.org" className="button">Demo</a> 
                  <a href="https://github.com/pennlabs/penn-sdk-python" className="button">Documentation</a>
                </div>
              </div>
            </div>
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

export default Guides;
