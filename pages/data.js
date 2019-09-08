import Header from '../components/Header';
import Footer from '../components/Footer';

const Data = (props) => (
  <div>
    <Header />    
      <div class="container" style={{marginTop: "5rem"}}>
        <div className="columns">
          <div className="column is-quarter" >
            <figure class="image" style={{width: "200px"}}>
              <img src="/static/img/stack.png" />
              <br />
            </figure>
          </div>
          <div className="column is-half">
            <h1 class="title">
              Data
            </h1>
            <h2 class="subtitle">
              Interesting and responsible information about how people use our products.
            </h2>
            <p>
              We've conducted a variety of experiments (we are Labs, after all) using the statistics and data that we collect through
              our dozens of products. We've made all our data analysis public for the Penn community to develop their own insights.
            </p>
            <hr />
            {props.experiments.map((experiment) => (
              <div class="card" style={{borderRadius:"5px", marginBottom: "1rem"}}>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">{experiment.title}</p>
                      <p class="subtitle is-6">
                        {experiment.tags.map((tag) => <span style={{margin: "0.5rem", marginLeft: 0}} class="tag is-light">{tag}</span>)} <br />
                        {experiment.description}
                      </p>
                    </div>
                  </div>
                  <div class="content">
                    <a href={experiment.demo} style={{marginRight: "0.2rem"}} className="button">Demo</a> 
                    <a href={experiment.code} className="button">Code</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="column is-quarter" style={{align: "right"}} />
        </div>
      </div>
      <br />
    <Footer />
  </div>
);

Data.getInitialProps = async({ }) => {
  const experiments = [
    { 
      title: "Course Comments", 
      tags: ['Penn Course Review', 'Natural Language Processing'], 
      description: "Using student comments to tell us more about how good classes are.",
      demo: "https://data.pennlabs.org", 
      code: "https://penn-sdk.readthedocs.io/"
    },
    { 
      title: "Schedule Similarities", 
      tags: ['Penn Mobile', 'Data Analytics'], 
      description: "Understanding what makes students take certain classes *together*.",
      demo: "https://data.pennlabs.org", 
      code: "https://penn-sdk.resadthedocs.io/"
    },
  ]
  return { experiments };
}

export default Data;
