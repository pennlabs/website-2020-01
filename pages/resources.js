import Layout from '../components/Layout'

import Link from 'next/link'

const Resources = props => (
  <Layout>
    <div className="container" style={{ marginTop: '5rem' }}>
      <div className="columns">
        <div className="column is-half">
          <h1 className="title">Resources</h1>
          <h2 className="subtitle">
            Tutorials and data for building your own products.
          </h2>
          <p>
            We're dedicated to giving back to the community - here are some
            guides and tutorials we've written to help everybody build products
            like ours. We also maintain free APIs and SDKs with support for
            Javascript, Python, Ruby and OAuth.
          </p>
          <hr />
          {props.resources.map(resource => (
            <div
              className="card"
              style={{ borderRadius: '5px', marginBottom: '1rem' }}
            >
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src={resource.src} alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">{resource.title}</p>
                    <p className="subtitle is-6">
                      {resource.tags.map(tag => (
                        <span
                          style={{ marginRight: '0.2rem' }}
                          className="tag is-light"
                        >
                          {tag}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
                <div className="content">
                  <Link href={resource.demo}>
                    <a
                      style={{ marginRight: '0.2rem' }}
                      className="button"
                    >
                      Demo
                    </a>
                  </Link>
                  <Link href={resource.documentation}>
                    <a className="button">
                      Documentation
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="column is-quarter" style={{ align: 'right' }} />
        <div className="column is-quarter">
          <figure className="image" style={{ width: '200px' }}>
            <img src="/static/img/stack.png" />
            <br />
          </figure>
        </div>
      </div>
    </div>
    <br />
  </Layout>
)

Resources.getInitialProps = async ({}) => {
  const resources = [
    {
      title: 'Penn SDK',
      src: '/static/img/PCP.png',
      tags: ['Python', 'SDK'],
      demo: 'https://data.pennlabs.org',
      documentation: 'https://penn-sdk.readthedocs.io/',
    },
    {
      title: 'Penn Mobile',
      src: '/static/img/PennMobile.png',
      tags: ['JSON', 'REST API'],
      demo: 'https://data.pennlabs.org',
      documentation: 'https://github.com/pennlabs/labs-api-server',
    },
    {
      title: 'Penn Course Review',
      src: '/static/img/PCR.png',
      tags: ['JSON', 'REST API'],
      demo: 'https://data.pennlabs.org',
      documentation: 'https://github.com/pennlabs/pcr/blob/master/docs/api.md',
    },
  ]
  return { resources }
}

export default Resources
