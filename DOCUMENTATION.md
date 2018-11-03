Structure:
  /components - repeated components used in different pages of the site
    Header.js: used on every page, just a navbar, no props
    Footer.js: used on every page, no props
    Box.js: used on splash page member pages, basic box component
      props:
        img = image
        imgclassName = class for image, controls size
        title = title text
        titleStyle = title style object
        titleChild = html if title has additional formatting
        desc = description text
        descChild = html if description has additional formatting  
    ProductBox.js: variation of box used on product and API pages
      props:
        title = title text
        img = image
        desc = description text
        tag = html with tag/link
    Table.js: 2 column table used in guide and documentation pages
      props:
        style = style object for outer container
        title = title text
        img = image
        desc = description
        col1 = title of the first column
        col2 = title of the second column
        data = object with data in the table, formatted:
          {col1: {
            text: "text in column 1",
            },
          col2: {
            text: "text in column 2",
            link: "link for text in column 2"
            }
          }

  /pages - all .js files in this folder are pages on the website
    index.js: just routes to splash.js, its the landing page
    team.js: lists all team members. should work once the get request returns
      all members and we have links/files for pics
    member.js: individual member page, should be done when we have pics, can
      customize what/how we display people's info
    products.js: lists all current products
    api.js: lists all API's for current products with links to API's
    guides.js: table with guides/tutorials
    documentation.js: table with documentation links
    error.js: routes to this page if an error occurs
    /[page_]sections - components within the page

  /static - images used on the website (needs to be updated with new member
    images OR the instead use url's provided by members)
    
  server.js - had to make this to parse url for team member pages, routes
    /member/?name=[member] to the appropriate page, otherwise just follows path.
    right now query is the first name of the member, but might want to change
    it to pennkey or something more unique
