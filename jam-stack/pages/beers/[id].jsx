import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Card from '../../components/Card'
import Navbar from '../../components/Navbar'

const BeerPage = () => {
  const router = useRouter()
  const id = router.query.id
  const [beers, setBeers] = useState()

  useEffect(() => {
    fetch('/api/products')
    .then(data => data.json())
    .then(beers => beers.filter(beer => beer.id == id))
    .then(beer =>  setBeers(beer))
  }, [id])

  return (
    <>
      <Navbar />
      <Card
        id={beers?.[0]?.id}
        name={beers?.[0]?.name}
        description={beers?.[0]?.description}
        image={beers?.[0]?.image.fields.file.url}
      />
    </>
  )
}

export default BeerPage;
