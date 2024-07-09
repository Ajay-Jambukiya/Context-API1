import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const ViewProduct = () => {
  let [products,setProducts]=useState([])

  useEffect(()=>{
      axios.get('https://664619b951e227f23aadc7d0.mockapi.io/products').then((res)=>{
          setProducts(res.data)
      }).catch((error)=>{
          toast.error(error.message)
      })
  },[])

  function getImageUrl(name) {
    return new URL(`/src/assets/images/${name}`, import.meta.url).href
 }

  return (
    <div class='container mt-3'>
      <h4>View Products</h4>
      <div class='container mt-3'>
      <div class="table-responsive">
        <table class="table table-primary table-hover shadow">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">Price</th>
              <th scope="col">Stock</th>
              <th scope="col">Brand</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod,index)=>
            <tr key={index}>
              <td>{prod.id}</td>
              <td>{prod.name}</td>
              <td>
                <img src={getImageUrl(prod.image)} alt="image" height="50px" width="50px"/>
              </td>
              <td>{prod.stock}</td>
              <td>{prod.price}</td>
              <td>{prod.brand}</td>
              <td>{prod.desc}</td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default ViewProduct
