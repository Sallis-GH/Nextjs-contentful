import { useEffect, useState } from "react"
import Card from '../components/Card'
import Navbar from "../components/Navbar";

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
