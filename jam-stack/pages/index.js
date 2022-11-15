import Card from '../components/Card'
import Navbar from "../components/Navbar";
const contentful = require( 'contentful')

const client = contentful.createClient({
  space: '5modqruhhzwo',
  environment: 'master',
  accessToken: process.env.PRODUCTS_PUBLISH_API_KEY
})

export async function getStaticProps () {
  const products = await client.getEntries()
    .then(response => response.items.map(item => item.fields))
    .catch(console.error)

  return {
    props: {
      products
    }
  }
}


export default function Home({ products }) {


  // const fetchData = async (url) => {
  //   let data = await fetch(url)
  //   data = await data.json();
  //   return data;
  // }


  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row d-flex justify-content-center">
            {products?.map((product, index) => (
              <Card key={index}
                id={product.id}
                name={product.name}
                description={product.description}
                image={product.image.fields.file.url}
              />
            ))}
        </div>
      </div>
    </>
  )
}
