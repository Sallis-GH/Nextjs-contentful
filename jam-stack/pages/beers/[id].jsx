import SingleCard from '../../components/SingleCard'
import Navbar from '../../components/Navbar'
const contentful = require( 'contentful')

const client = contentful.createClient({
  space: '5modqruhhzwo',
  environment: 'master',
  accessToken: process.env.PRODUCTS_PUBLISH_API_KEY
})

export async function getStaticPaths () {
  
  const products = await client.getEntries()
    .then(response => response.items.map(item => item.fields))
    .catch(console.error)

  return {
    fallback: false,
    paths: products.map(pr => {
      return { params: { id: '' + pr.id} }
    })
  }
}

export async function getStaticProps (context) {
  const products = await client.getEntries()
    .then(response => response.items.map(item => item.fields))
    .catch(console.error)

  const beer =  products.find(el => (el.id + '') === context.params.id)
  return {
    props: {
      beer
    }
  }
}


const BeerPage = ({ beer }) => {

  return (
    <>
      <Navbar />
      <SingleCard
        name={beer.name}
        description={beer.description}
        image={beer.image.fields.file.url}
      />
    </>
  )
}

export default BeerPage;
