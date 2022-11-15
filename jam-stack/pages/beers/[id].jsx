import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
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
      console.log('product id is ', pr.id)
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
      <Card
        id={beer.id}
        name={beer.name}
        description={beer.description}
        image={beer.image.fields.file.url}
      />
    </>
  )
}

export default BeerPage;
