import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { DataContext } from './Context'

const ProductCard = () => {
    let [products,setProducts]=useState([])
    const context = useContext(DataContext)

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
    <div className='row'>
        {products.map((product,index)=>
            <div class="card col-3 m-3">
            <img class="card-img-top" src={getImageUrl(product.image)} alt={product.name} width={'100px'} height={'200px'}/>
            <div class="card-body" key={index}>
                <h4 class="card-title">{product.name}</h4>
                <p class="card-text">{product.brand}</p>
                <p class="card-text">{product.price}</p>
                <p class="card-text">{product.desc}</p>
            </div>
            <button class='btn btn-primary m-2' onClick={()=>context.addCart(product)}>Add to Cart</button>
          </div>
        )}
      
    </div>
  )
}

export default ProductCard
