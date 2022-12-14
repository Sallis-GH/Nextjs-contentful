const contentful = require('contentful')

const client = contentful.createClient({
  space: '', //spacekey
  environment: 'master',
  accessToken: process.env.PRODUCTS_PUBLISH_API_KEY //apikey
})


export default function handler(req, res) {
  client.getEntries()
    .then(response => response.items.map(item => item.fields))
    .then(products => res.json(products))
    .catch(console.error)
}
