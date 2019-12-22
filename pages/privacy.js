import Layout from '../components/Layout'

import Link from 'next/link'

const data = [
  {
    product: 'Penn Mobile iOS',
    link: 'https://www.iubenda.com/privacy-policy/16589027',
  },
  {
    product: 'Penn Mobile Android',
    link: 'https://www.iubenda.com/privacy-policy/88368849',
  },
  {
    product: 'Penn Course Review',
    link: 'https://www.iubenda.com/privacy-policy/86347108',
  },
  {
    product: 'Penn Course Alert',
    link: 'https://www.iubenda.com/privacy-policy/50589026',
  },
  {
    product: 'Penn Course Search',
    link: 'https://www.iubenda.com/privacy-policy/77494274',
  },
]

const Privacy = () => (
  <Layout>
    <section>
      <div className="container">
        <br />
        {data.map(({ product, link }) => (
          <p key={product}>
            <strong>{product}:&nbsp;</strong>
            <Link href={link}>
              <a>Privacy Policy</a>
            </Link>
            ; this Application collects some Personal Data from its Users.
          </p>
        ))}
        <br />
      </div>
    </section>
  </Layout>
)

export default Privacy
