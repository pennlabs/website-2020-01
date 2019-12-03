import Layout from '../components/Layout'

import Products from '../components/splash_sections/products'
import Intro from '../components/splash_sections/intro'
import About from '../components/splash_sections/about'
// import News from './splash_sections/news'

const Index = ({}) => (
  <Layout>
    <Intro />
    <Products />
    <About />
  </Layout>
)

export default Index
