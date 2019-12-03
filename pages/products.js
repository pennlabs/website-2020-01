import Layout from '../components/Layout'

import CurrentProducts from '../components/products_sections/currentProducts'

const Products = () => (
  <Layout>
    <section className="section">
      <div className="container">
        <h3 className="title is-3" style={{ marginBottom: '0.5rem' }}>
          Products
        </h3>
        <p>
          Our products are intended to solve everyday problems for you, so that
          you can focus on the more important parts of life at Penn.
        </p>
        <br />
        <CurrentProducts />
      </div>
    </section>
  </Layout>
)

export default Products
