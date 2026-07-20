import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ProductsDetails = () => {

    const { id } = useParams()

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    async function fetchData() {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/api/product/getproductbyid/${id}`,
                {
                    withCredentials: true,
                }
            )

            setProduct(response.data.product)
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [id])

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center text-2xl font-semibold">
                Loading Product...
            </div>
        )
    }

    if (!product) {
        return (
            <div className="min-h-screen flex justify-center items-center text-2xl text-red-500">
                Product Not Found
            </div>
        )
    }
    return (

    
        <div className="max-w-full mx-auto px-6 py-12">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* LEFT IMAGE */}

            <div className="lg:col-span-4 sm:col-span-1 md:col-span-2 rounded-3xl">

            <div className="rounded-3xl h-full flex items-center justify-center p-8">

                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-[600px] object-contain rounded-2xl hover:scale-105 transition-all duration-700 hover:shadow-slate-400 shadow-md"
                />

            </div>

        </div>


        {/* PRODUCT DETAILS */}

        <div className="lg:col-span-4 flex flex-col">

            <p className="uppercase text-sm font-semibold tracking-widest text-blue-600">
                {product.category}
            </p>

            <h1 className="text-5xl font-bold mt-3 leading-tight">
                {product.title}
            </h1>

            {/* Rating */}

            <div className="flex items-center gap-2 mt-5">

                <div className="text-yellow-400 text-lg">
                    <span>{`★`.repeat(product.rating)}</span>
                </div>

                

            </div>

            {/* Price */}

            <h2 className="text-4xl font-bold text-blue-600 mt-6">
                PKR {product.price}
            </h2>

            {/* Stock */}

            <div className="flex gap-5 mt-5 text-sm">

                <span className="text-green-600 font-medium">
                    ✔ In Stock
                </span>

                <span className="text-gray-500">
                    Free Delivery
                </span>

            </div>

            <hr className="my-8" />

            {/* Description */}

            <p className="text-gray-600 leading-8 text-[16px]">
                {product.description}
            </p>

        </div>


        {/* PURCHASE BOX */}

        <div className="lg:col-span-3">

            <div className=" bg-[#f8f8f8] rounded-3xl p-7 shadow-xl hover:shadow-slate-400 transition-all duration-700 sticky top-24">

                <h2 className="text-4xl font-bold text-blue-600">
                    PKR {product.price}
                </h2>


                {/* Quantity */}

                <div className="mt-8">

                    <p className="font-semibold mb-3">
                        Quantity
                    </p>

                    <div className="flex items-center w-fit border rounded-xl overflow-hidden">

                        <button className="px-4 py-2 hover:bg-gray-100">
                            −
                        </button>

                        <span className="px-6 py-2 border-x">
                            1
                        </span>

                        <button className="px-4 py-2 hover:bg-gray-100">
                            +
                        </button>

                    </div>

                </div>


                {/* Buttons */}

                <button className="w-full mt-8 bg-blue-600 text-white rounded-xl py-3 font-semibold hover:bg-blue-700 transition">

                    Add to Cart

                </button>

                <button className="w-full mt-4 border-2 border-blue-600 text-blue-600 rounded-xl py-3 font-semibold hover:bg-blue-600 hover:text-white transition">

                    Buy Now

                </button>

                <button className="w-full mt-4 border rounded-xl py-3 hover:border-blue-600 hover:text-blue-600 transition">

                    ♡ Add to Wishlist

                </button>

            </div>

        </div>

    </div>

</div>
)
}

export default ProductsDetails