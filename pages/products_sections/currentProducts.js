import ProductCard from '../../components/ProductCard'

const products = [
  {
    href: 'https://pennclubs.com',
    img: '/static/img/clubs.png',
    title: 'Penn Clubs',
    desc:
      'Penn Clubs is your central source of information about student organizations. Keep discovering new clubs throughout the year, not just at the SAC Fair. We aim to make the club application process less stressful!',
  },
  {
    href: 'https://penncoursereview.com/',
    img: '/static/img/PCR.png',
    title: 'Penn Course Review',
    desc:
      'Penn Course Review provides quantitative data on courses and professors to help students make informed decisions about coursework. It includes metrics for course difficulty and quality, professor quality, and more.',
  },
  {
    href: 'https://pennbasics.com/',
    img: '/static/img/PennBasics.png',
    title: 'Penn Basics',
    desc:
      "Penn Basics is a one-stop shop for the basics of living at Penn. It strives to make students' lives easier at Penn so they can focus on what matters. Penn Basics aggregates essential data on dining, laundry, and study spaces, and tailors the dashboard to your preferences.",
  },
  {
    href: 'https://penncoursealert.com/',
    img: '/static/img/PCA.png',
    title: 'Penn Course Alert',
    desc:
      'Penn Course Alert allows students to register for immediate alerts via email or text when full courses open up. Reduce the guesswork and uncertainty in course registration and make sure you get the in-demand courses you want!',
  },
  {
    img: '/static/img/PennMobile.png',
    title: 'Penn Mobile',
    desc:
      "Penn Mobile is the university's first official mobile app. On iOS and Android, Penn Mobile provides live dining hall menus and hours, laundry machine availability, study room booking, top campus news, and school support numbers.",
  },
  {
    img: '/static/img/PCP.png',
    title: 'Penn Course Plan',
    desc:
      'Penn Course Plan combines course rating insights with an easy-to-use mock scheduling tool. Choose the best schedule for your semester, with at-a-glance schedule insights and comparisons!',
  },
  {
    href: 'https://penncfa.com/accounts/login/?next=/',
    img: '/static/img/CFA-logo.png',
    title: 'Common Funding Application',
    desc:
      'The Common Funding Application connects student organizations to various funding sources. Organizations can easily request event funding from a centralized application. Funding boards are able to review applications and ensure accountability.',
  },
]

const CurrentProducts = () => (
  <div>
    <div className="tabs">
      <ul>
        <li className="is-active">
          <a>Current Products</a>
        </li>
      </ul>
    </div>
    <div className="columns is-multiline">
      {products.map(props => (
        <ProductCard {...props} key={props.title} />
      ))}
    </div>
  </div>
)

export default CurrentProducts
