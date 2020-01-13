import Head from 'next/head'

const DEFAULT_IMAGE_URL =
  'https://pennlabs-assets.s3.amazonaws.com/metadata-images/penn-labs.png'

const KEYWORDS = [
  'penn',
  'labs',
  'pennlabs',
  'code',
  'program',
  'upenn',
  'pennapps',
  'pennappslabs',
  'labsatpenn',
  'penncoursereview',
  'course',
  'review',
  'basics',
  'students',
]

export default ({
  title = 'Penn Labs',
  image = DEFAULT_IMAGE_URL,
  imageAlt = 'Penn Labs logo',
  url = 'https://pennlabs.org',
  description = 'Penn Labs is a student organization building tech products that improve life at Penn. In addition to creating free, open-source products, we give back with educational resources and technical support.',
  keywords = KEYWORDS.join(', '),
}) => (
  <Head>
    <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
    />
    <link rel="stylesheet" href="/static/css/blog-post.css" />

    <title key="title">{title}</title>

    <meta name="theme-color" content="#ffffff" />
    <meta name="description" content={description} key="description" />
    <meta name="keywords" content={keywords} />
    <meta name="author" content="Penn Labs <contact@pennlabs.org>" />

    <meta property="og:title" content={title} key="og-title" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} key="url" />
    <meta property="og:image" content={image} key="image" />
    <meta property="og:image:alt" content={imageAlt} key="image-alt" />

    <meta property="twitter:site" content="@pennlabs" />
    <meta
      property="twitter:description"
      content={description}
      key="twitter-description"
    />
    <meta property="twitter:title" content={title} key="twitter-title" />
    <meta property="twitter:image" content={image} key="twitter-image" />
    <meta
      property="twitter:image:alt"
      content={imageAlt}
      key="twitter-image-alt"
    />
    <meta property="twitter:card" content="summary" />

    <link rel="stylesheet" href="styles/style.css" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
      integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
      crossOrigin="anonymous"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="shortcut icon"
      href="/static/img/favicon.ico"
      type="image/png/ico"
    />
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-21029575-11"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-21029575-11');
    `,
      }}
    />
  </Head>
)
