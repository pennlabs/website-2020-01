import Layout from '../components/Layout'

const Club = () => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-half">
            <h1 className="title has-text-weight-bold"> Penn Coffe Club </h1>
            <p className="subtitle">
              We are a club about coffee -- our events usually center around
              drinking, tasting, and brewing the caffeinated drink.
            </p>
            <img src="https://static1.squarespace.com/static/5739ee887da24fc27bc8933f/t/5828c97fcd0f681af51723ff/1479068040846/2.jpg?format=2500w" />
            <br /> <br />
            <p>
              Coffee is used as a medium for social interaction. We use that
              crucial trait, building low-stress environments for positive
              social interaction. Penn is a hyper-motivated and high pressure
              environment, where too often students fail to invest time in
              self-care. At this "work hard/play hard" school, not enough
              emphasis is placed on spontaneous conversation. We try to create,
              foster, and inhabit a space to fill that void.
            </p>
          </div>
          <div className="column is-half">
            <br /> <br />
            <p className="subtitle">Upcoming Events: </p>
            <div className="columns">
              <div className="column">
                <div class="card">
                  <div class="card-content">
                    <div class="media">
                      <div class="media-content">
                        <p class="title is-4">Coffee Bar</p>
                        <p class="subtitle is-6">
                          {' '}
                          <time datetime="2016-1-1">
                            11:09 PM - 1 Jan 2016
                          </time>{' '}
                        </p>
                      </div>
                    </div>

                    <div class="content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                      <a href="#">#css</a> <a href="#">#responsive</a>
                    </div>
                  </div>
                </div>
                <br />
                <div class="card">
                  <div class="card-content">
                    <div class="media">
                      <div class="media-content">
                        <p class="title is-4">Coffee Bar</p>
                        <p class="subtitle is-6">
                          {' '}
                          <time datetime="2016-1-1">
                            11:09 PM - 1 Jan 2016
                          </time>{' '}
                        </p>
                      </div>
                    </div>

                    <div class="content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                      <a href="#">#css</a> <a href="#">#responsive</a>
                    </div>
                  </div>
                </div>
                <br />
                <a className="button"> Website </a>{' '}
                <a className="button"> Email </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default Club
