import React from 'react'

export default () => (
  <head>
    <title>Penn Labs</title>
    <meta charSet="utf-8" />
    <link rel="stylesheet" href="styles/style.css" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
      integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
      crossorigin="anonymous"
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
    ></script>
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
  </head>
)
