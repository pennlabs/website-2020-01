import Layout from '../components/Layout'

import Products from './splash_sections/products'
import Intro from './splash_sections/intro'
import About from './splash_sections/about'
// import News from './splash_sections/news'

const Index = ({}) => (
  <Layout>
    <Intro />
    <Products />
    <About />
  </Layout>
)

export default Index
