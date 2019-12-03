import Layout from '../components/Layout'
import Table from '../components/Table'
import Link from 'next/link'

const Guides = () => (
  <Layout>
    <div className="container">
      <Table
        title="Documentation"
        img="/static/img/undraw_data.png"
        col1="API"
        col2="Docs"
        data={[
          {
            col1: { text: 'Penn OpenData APIs' },
            col2: {
              text: 'Docs',
              link:
                'https://esb.isc-seo.upenn.edu/8091/documentation#directory',
            },
          },
          {
            col1: { text: 'Penn OpenData Python SDK' },
            col2: {
              text: 'Docs and Source',
              link: 'https://github.com/pennlabs/penn-sdk-python',
            },
          },
          {
            col1: { text: 'Penn OpenData Node SDK' },
            col2: {
              text: 'Docs and Source',
              link: 'https://github.com/pennlabs/penn-sdk-node',
            },
          },
          {
            col1: { text: 'Penn OpenData Ruby SDK (alpha)' },
            col2: {
              text: 'Docs and Source',
              link: 'https://github.com/pennlabs/penn-sdk-ruby',
            },
          },
        ]}
        style={{ width: 450 }}
      />
    </div>
  </Layout>
)

export default Guides
