import { Spring, Transition } from 'react-spring';

const items = ["Hi", "we're", "Penn", "Labs!"];

const Intro = (props) => (
  <div className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-6" style={{paddingTop:"3rem"}}>
          // <Transition
          //   items={items} keys={item => item.key}
          //   from={{ transform: 'translate3d(0,-40px,0)' }}
          //   enter={{ transform: 'translate3d(0,0px,0)' }}
          //   leave={{ transform: 'translate3d(0,-40px,0)' }}>
          //   {item => props =>
          //     <div style={props}>{item.text}</div>
          //   }
          // </Transition>
        // <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={100}>
        //   {props => (
        //     <div style={props}>
        //       <h1 className="title" style={{fontSize:"2.8rem"}}>
        //         Hi, we're Penn Labs:
        //       </h1>
        //     </div>)}
        // </Spring>
          <div>
            <h2 className="subtitle" style={{fontSize:"2rem"}}>
              a team of student <strong>software engineers</strong>, <strong>product designers</strong>, and <strong>business developers.</strong>
            </h2>
            <p style={{fontSize:"1.2rem"}}>
              Penn Labs empowers others to make connections: connections to resources, connections to people, and connections to the greater Penn community.
            </p>
            <br />
            <p style={{fontSize:"1.2rem"}}>
              Our ultimate goal is improving the Penn community. We aim to do so not only by creating high-quality products, but also by giving back to the community with educational resources and technical support.
            </p>
            <br />
            <a href="/products" className="button is-medium"> View Products </a>
            <div className="column is-5" style={{paddingLeft:"4rem", marginLeft:"2rem"}}>
              <figure className="image">
                <img src="/static/img/test-hero.png" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Intro;
