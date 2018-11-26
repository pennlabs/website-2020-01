import { Spring, config } from 'react-spring';

const Intro = (props) => (
  <div className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-6" style={{paddingTop:"3rem"}}>
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={500} config={config.molasses}>
            {props => (
              <div style={props}>
                <h1 className="title" style={{fontSize:"2.8rem"}}>
                  Hi, we're Penn Labs.
                </h1>
              </div>)}
          </Spring>
          <br/>
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={1200} config={config.molasses}>
            {props => (
              <div style={props}>
                <h2 className="subtitle" style={{fontSize:"2rem"}}>
                  We are a team of student <strong>software engineers</strong>, <strong>product designers</strong>, and <strong>business developers.</strong>
                </h2>
              </div>)}
          </Spring>
          <br/>
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={1500} config={config.molasses}>
            {props => (
              <div style={props}>
                <p style={{fontSize:"1.2rem"}}>
                  Penn Labs empowers others to make connections: connections to resources, connections to people, and connections to the greater Penn community.
                  </p>
              </div>)}
          </Spring>
          <br />
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={1700} config={config.molasses}>
            {props => (
              <div style={props}>
                <p style={{fontSize:"1.2rem"}}>
                  Our ultimate goal is improving the Penn community. We aim to do so not only by creating high-quality products, but also by giving back to the community with educational resources and technical support.
                </p>
              </div>)}
          </Spring>
          <br />
          <Spring from={{ opacity: 0 }} to={{ opacity: 1, borderColor: "#209CEE", color: "#209CEE" }} delay={1900} config={config.molasses}>
            {props => (
              <a style={props} href="/products" className="button is-medium"> View Products </a>)}
          </Spring>
        </div>
        <div className="column is-5" style={{paddingLeft:"4rem", marginLeft:"2rem"}}>
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={2100} config={config.molasses}>
            {props => (
              <div style={props}>
                <figure className="image">
                  <img src="/static/img/test-hero.png" />
                </figure>
              </div>)}
          </Spring>
        </div>
      </div>
    </div>
  </div>);

export default Intro;
