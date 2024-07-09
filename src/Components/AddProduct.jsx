import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddProduct = () => {
  const [addProduct, setAddProduct] = useState({
    id: "",
    name: "",
    price: "",
    brand: "",
    image: "",
    stock: "",
    desc: "",
  });

  let navigate=useNavigate();

  let handleImage = (e) => {
    console.log(e.target.files[0].name);
    setAddProduct({ ...addProduct, image: e.target.files[0].name });
  };

  let addproduct = (e) => {
    e.preventDefault();
    console.log(addProduct);
    axios.post('https://664619b951e227f23aadc7d0.mockapi.io/products',addProduct).then(()=>{
      toast.success('product add sucessfully')
      navigate('/admindash/viewproduct')
    }).catch((error)=>{
      toast.error(error.message)
    })
  };

  return (
    <div class="container mt-3">
      <h4>Add Products</h4>
      <form onSubmit={addproduct} class="row">
        <div class="form-group col-6 mb-3">
          <label for="" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control shadow"
            name="name"
            value={addProduct.name}
            required
            onChange={(e) =>
              setAddProduct({ ...addProduct, name: e.target.value })
            }
          />
        </div>
        <div class="form-group col-6 mb-3">
          <label for="" class="form-label">
            Price
          </label>
          <input
            type="text"
            class="form-control shadow"
            name="price"
            value={addProduct.price}
            onChange={(e) =>
              setAddProduct({ ...addProduct, price: e.target.value })
            }
          />
        </div>
        <div class="form-group col-6 mb-3">
          <label for="" class="form-label">
            Image
          </label>
          <input
            type="file"
            className="form-control shadow"
            name="image"
            onChange={handleImage}
          />
        </div>
        <div class="form-group col-6 mb-3">
          <label for="" class="form-label">
            Brand
          </label>
          <input
            type="text"
            class="form-control shadow"
            name="brand"
            value={addProduct.brand}
            onChange={(e) =>
              setAddProduct({ ...addProduct, brand: e.target.value })
            }
          />
        </div>
        <div class="form-group col-6 mb-3">
          <label for="" class="form-label">
            Stock
          </label>
          <input
            type="text"
            class="form-control shadow"
            name="stock"
            value={addProduct.stock}
            onChange={(e) =>
              setAddProduct({ ...addProduct, stock: e.target.value })
            }
          />
        </div>
        <div class="form-group col-6 mb-3">
          <label for="" class="form-label">
            Description
          </label>
          <input
            type="text"
            class="form-control shadow"
            name="desc"
            value={addProduct.desc}
            onChange={(e) =>
              setAddProduct({ ...addProduct, desc: e.target.value })
            }
          />
        </div>
        <div className="d-grid">
          <button type="submit" class="btn btn-outline-primary shadow mt-3">
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
