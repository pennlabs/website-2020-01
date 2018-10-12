import Header from '../components/Header';
import Footer from '../components/Footer';

const Guides = (props) => (
  <div>
    <Header />
    <div class="container">
      <div class="columns">
        <div class="column"> </div>
        <div class="column">
          <div class="levels">
            <div class="level-left">
              <div class="level-item">
                <h3 class="title is-3" style={{marginBottom:"0.5rem"}}>
                  Labs Guides
                </h3>
              </div>
              <div class="level-item">
                <p class="image">
                  <img src="/static/img/undraw_data.png" style={{height:"10rem", width:"auto"}}/>
                </p>
              </div>
            </div>
          </div>
          <p>We're dedicated to giving back to the community - here are some guides and tutorials we've written to help everybody build products like ours.</p>
          <br/>
          <Table />
        </div>
        <div class="column"> </div>
      </div>
      </div>
    <Footer />
  </div>
);

const Table = (props) => (
  <table class="table">
    <thead>
      <tr>
        <th>Guide</th>
        <th>Link</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Public API Documentation </td>
        <td><a href="/api">Penn Labs</a></td>
      </tr>
    </tbody>
  </table>
);

export default Guides;
