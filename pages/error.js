import Layout from '../components/Layout'

const Error = () => (
  <Layout>
    <section className="section" style={{ height: '100%' }}>
      <div className="container" style={{ paddingTop: '4rem' }}>
        <nav className="level">
          <div className="level-item">
            <figure className="image" style={{ width: '15%', height: 'auto' }}>
              <img src="/static/img/404-beaker.png" />
            </figure>
            <div style={{ marginLeft: '2rem' }}>
              <h3 className="title is-3" style={{ paddingBottom: '0.5rem' }}>
                Oops... page not found :(
              </h3>
              <p>
                Go back to <Link href="/"><a>home</a></Link> or{' '}
                <Link href="/contact"><a>contact us</a></Link> if you think this is a
                mistake.
              </p>
            </div>
          </div>
        </nav>
      </div>
    </section>
  </Layout>
)

export default Error
