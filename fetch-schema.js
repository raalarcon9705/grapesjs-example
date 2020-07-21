const fetchSchema = require('graphql-fetch-schema').default;

fetchSchema('https://elroisupplies.myshopify.com/api/2020-04/graphql', {
  json: false,
  graphql: true,
  outputPath: './',
  cookie: 'cookiename=foo;',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'x-shopify-storefront-access-token': '35ca320bd94776cba607483b85333050'
  }
}).then(
  () => {
    console.log('Schema successfully written')
  },
  err => {
    console.error(err)
  },
)
