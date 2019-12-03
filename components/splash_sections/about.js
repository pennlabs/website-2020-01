import InfoCard from '../InfoCard'

const About = () => (
  <div>
    <section className="section">
      <div className="container">
        <h1
          className="title has-text-weight-bold"
          style={{ fontSize: '2.8rem' }}
        >
          About Penn Labs:
        </h1>
        <h2 className="subtitle" style={{ fontSize: '2rem' }}>
          the people behind the products.
        </h2>
        <div className="columns is-multiline">
          <InfoCard
            titleChild={
              <p className="title is-3" style={{ paddingBottom: '0.5rem' }}>
                <strong
                  className="has-text-weight-bold"
                  style={{ color: '#209CEE' }}
                >
                  100,000+{' '}
                </strong>
                total users
              </p>
            }
            desc="across over 10 student-developed applications."
          />
          <InfoCard
            titleChild={
              <p className="title is-3" style={{ paddingBottom: '0.5rem' }}>
                <strong
                  className="has-text-weight-bold"
                  style={{ color: '#209CEE' }}
                >
                  60+{' '}
                </strong>{' '}
                GitHub contributors
              </p>
            }
            desc="building high-quality open source software."
          />
          <InfoCard
            titleChild={
              <p className="title is-3" style={{ paddingBottom: '0.5rem' }}>
                <strong
                  className="has-text-weight-bold"
                  style={{ color: '#209CEE' }}
                >
                  7+{' '}
                </strong>{' '}
                years
              </p>
            }
            desc="of supporting the Penn community at large."
          />
          <InfoCard
            titleChild={
              <p className="title is-3" style={{ paddingBottom: '0.5rem' }}>
                <strong
                  className="has-text-weight-bold"
                  style={{ color: '#209CEE' }}
                >
                  $930,000+{' '}
                </strong>
                handled
              </p>
            }
            desc="through our Common Funding Application portal."
          />
        </div>
        <figure className="image">
          <img src="/static/img/1labs-group.jpg" />
        </figure>
        <p className="has-text-grey is-size-7" style={{marginTop: "1rem"}}> Fall 2019 </p>
        <br />
      </div>
    </section>
  </div>
)

export default About
