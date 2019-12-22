import Layout from '../components/Layout'

const Data = props => (
  <Layout>
    <div className="container" style={{ marginTop: '5rem' }}>
      <div className="columns">
        <div className="column is-quarter">
          <figure className="image" style={{ width: '200px' }}>
            <img src="/static/img/stack.png" />
            <br />
          </figure>
        </div>
        <div className="column is-half">
          <h1 className="title">Data Science</h1>
          <h2 className="subtitle">
            Interesting and responsible information about how people use our
            products.
          </h2>
          <p>
            We've conducted a variety of experiments (we are Labs, after all)
            using the statistics and data that we collect through our dozens of
            products. We've made all our data analysis public for the Penn
            community to develop their own insights.
          </p>
          <br />
          {props.experiments.map(experiment => (
            <div
              className="card"
              style={{ borderRadius: '5px', marginBottom: '1rem' }}
            >
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{experiment.title}</p>
                    <p className="subtitle is-6">
                      {experiment.tags.map(tag => (
                        <span
                          style={{ margin: '0.5rem', marginLeft: 0 }}
                          className="tag is-light"
                        >
                          {tag}
                        </span>
                      ))}{' '}
                      <br />
                      {experiment.description}
                    </p>
                  </div>
                </div>
                <div className="content">
                  <Link href={experiment.demo}>
                    <a style={{ marginRight: '0.2rem' }} className="button">
                      Coming Soon
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="column is-quarter" style={{ align: 'right' }} />
      </div>
    </div>
    <br />
  </Layout>
)

Data.getInitialProps = async ({}) => {
  const experiments = [
    {
      title: 'Course Comments',
      tags: ['Penn Course Review', 'Natural Language Processing'],
      description:
        'Using student comments to tell us more about how good classes are.',
      demo: 'https://data.pennlabs.org',
      code: 'https://penn-sdk.readthedocs.io/',
    },
    {
      title: 'Schedule Similarities',
      tags: ['Penn Mobile', 'Data Analytics'],
      description:
        'Understanding what makes students take certain classes *together*.',
      demo: 'https://data.pennlabs.org',
      code: 'https://penn-sdk.resadthedocs.io/',
    },
    {
      title: 'Comment Generation',
      tags: ['Penn Course Review', 'Deep Learning'],
      description:
        'Writing hollistic comments using a model trained on years of real data.',
      demo: 'https://data.pennlabs.org',
      code: 'https://penn-sdk.resadthedocs.io/',
    },
  ]
  return { experiments }
}

export default Data
