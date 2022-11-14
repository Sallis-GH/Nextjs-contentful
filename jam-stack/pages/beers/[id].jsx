import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
// import Card from '../../components/Card'

const BeerPage = () => {
  const router = useRouter() 
  const id = router.query.id
  const [beers, setBeers] = useState([{name: 'porcodio'}])

      const fetchk = async () => {
        // let data = await fetch('/api/products')
        // data = await data.json()
        // data = data.filter(beer => beer.id == id)
        // console.log(await data, 'popp');
        fetch('/api/products')
          .then(data => data.json())
          .then(beers => beers.filter(beer => beer.id == id))
          .then(beer => {
            console.log(beer)
            setBeers(beer)})
      }

      useEffect(() =>{
        fetchk();
      }, [])

      // setTimeout(() => {
      //   console.log(beers)
      // }, 1000);
  return (
    // <Card
    //   id={beers.id}
    //   name={beers.name}
    //   description={beers.description}
    //   image={beers.image.fields.file.url}
    // />
    <>
    
      <h1>DIO CANE</h1>
      <h1>PORCO DIO</h1>
      <h1>DIO BESTIA</h1>
      <h1>{beers?.[0]?.name}</h1>
    </>
  )
}

export default BeerPage;
