import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateProduct = () => {

  const navigate = useNavigate()

  const[productData,setProductData] = useState({
    title:'',
    description:'',
    price:'',
    image:null,
    category:'',
    rating:0,
  })  

  async function formSubmission(e){
    e.preventDefault()

    const formData = new FormData()
    formData.append('title', productData.title)
    formData.append('description', productData.description)
    formData.append('price', productData.price)
    formData.append('category', productData.category)
    formData.append('image', productData.image)
    formData.append('rating',productData.rating)

    const response = await axios.post('http://localhost:3000/api/product/create',formData,
        {withCredentials:true})
    console.log(response)
    
    setProductData({
        title:'',
        description:'',
        price:'',
        image:null,
        category:'',
        rating:0
    })

    navigate('/all-products')
  }

  function handleChange(e){
    const {name,value} = e.target
    setProductData({
        ...productData,
        [name]:value
    })
  }

  function handleImage(e){
    const file = e.target.files[0]
        setProductData({
        ...productData,
        image:file
    })
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4 py-10">
      <div className="bg-white shadow-xl rounded-3xl w-full max-w-2xl p-8">

        <h1 className="text-3xl font-bold text-center mb-8">
          Create <span className="text-blue-600">Product</span>
        </h1>

        <form
          onSubmit={formSubmission}
          className="space-y-6"
        >

          {/* Product Title */}
          <div>
            <label className="block mb-2 font-medium">
              Product Title
            </label>

            <input
              onChange={handleChange}
              type="text"
              name="title"
              value={productData.title}
              placeholder="Enter product title"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 font-medium">
              Description
            </label>

            <textarea
            onChange={handleChange}
            name="description"
            value={productData.description}
            rows="4"
            placeholder="Write product description..."
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none resize-none focus:border-blue-600"
            required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block mb-2 font-medium">
              Price (PKR)
            </label>

            <input
            onChange={handleChange}
              type="number"
              name="price"
              value={productData.price}
              placeholder="Enter price"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-2 font-medium">
              Category
            </label>

            <select
            onChange={handleChange}
            name="category"
            value={productData.category}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
            required
            >
              <option value="">Select Category</option>
              <option value="Laptop">Laptop</option>
              <option value="Smartphone">Smartphone</option>
              <option value="Headphones">Headphones</option>
              <option value="Smart Watch">Smart Watch</option>
              <option value="Gaming">Gaming</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>

          {/* Rating */}
          <div>
            
            <label className="block mb-2 font-medium">
              Rating
            </label>
            <select
            onChange={handleChange}
            name="rating"
            value={productData.rating}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
            required
            >
              <option value="">Select Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          {/* Image */}
          <div>
            <label className="block mb-2 font-medium">
              {productData.image ? productData.image.name : "Select Image"}
            </label>

            <input
              onChange={handleImage}
              type="file"
              accept="image/*"
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-3xl hover:bg-blue-700 transition duration-300 font-semibold"
          >
            Create Product
          </button>

        </form>
      </div>
    </div>
  );
};


export default CreateProduct