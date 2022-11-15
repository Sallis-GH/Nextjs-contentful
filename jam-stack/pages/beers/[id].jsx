import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Card from '../../components/Card'
import Navbar from '../../components/Navbar'

const BeerPage = () => {
  const router = useRouter()
  const id = router.query.id
  const [beers, setBeers] = useState(router.query.name ? router.query.name : null)

  console.log('router query', router.query)

  useEffect(() => {
    if (router.query.name)
      return setBeers(router.query)
    if(!beers && router.query.id){
      fetch('/api/products')
        .then(data => data.json())
        .then(beers => beers.filter(beer => beer.id == router.query.id))
        .then(beer => setBeers({
          ...beer[0],
          image: beer[0].image.fields.file.url
        }))
    }
  }, [id])

  console.log(beers, 'beer');

  return (
    <>
      <Navbar />
      <Card
        id={beers?.id}
        name={beers?.name}
        description={beers?.description}
        image={beers?.image}
      />
    </>
  )
}

export default BeerPage;
