import { useEffect, useState } from "react"
import Card from '../components/Card'

export default function Home() {

  const [products, setProducts] = useState()


  const fetchData = async (url) => {
    let data = await fetch(url)
    data = await data.json();
    return data;
  }

  useEffect(() => {
    fetch('/api/products')
      .then(data => data.json())
      .then(products => setProducts(products))
  }, []);

  console.log(products?.[0]);

  return (
    <>
      {products?.map((product, index) => (
        <Card key={index}
          id={product.id}
          name={product.name}
          description={product.description}
          image={product.image.fields.file.url}
        />
      ))}
    </>
  )
}
