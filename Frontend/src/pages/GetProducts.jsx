import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GetSellerProducts = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchProducts() {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/api/product/getsellerproducts`,
                { withCredentials: true } // Added credentials so the cookie is sent
            );
            setProducts(response.data.products);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    async function deleteproduct(id){
        try{
            const response = await axios.delete(
                `${import.meta.env.VITE_API_URL}/api/product/delete/${id}`,
                {withCredentials:true}
            )
            console.log(response.data)
            if(response.success === 200){
                alert("Product deleted successfully")
            }
            fetchProducts()
            
        }catch(error){
            console.log(error)
            alert("Product not deleted")
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="text-center text-xl mt-20">
                Loading Products...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-5">

            <div>
                <h1 className="text-4xl font-bold text-center mb-10">
                    All <span className="text-blue-600">Products</span>
                </h1>
                
            </div>
            <div className="flex items-center justify-center gap-5 my-10">
                    <Link to='/create-product' className='px-5  py-3  bg-blue-600 text-white text-xl rounded-2xl hover:bg-blue-700 transition duration-300 lg:text-xl lg:px-15 lg:py-5  '>
                        Add New Product
                    </Link>
            </div>
            

            <div className="max-w-6xl mx-auto flex flex-col gap-6">
                {products.length === 0 ? (
                    <>
                    <div className="text-center text-gray-500 text-xl mt-10">
                        No products available.
                    </div>
                    
                    </>
                ) : (
                
                    products.map((product) => (

                        <div
                            key={product._id}
                            className="bg-white rounded-3xl shadow-lg p-5 flex flex-col md:flex-row justify-between items-center gap-5"
                        >

                            {/* Image */}

                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-40 h-40 rounded-2xl object-cover"
                            />

                            {/* Product Details */}

                            <div className="flex-1">

                                <h2 className="text-2xl font-semibold">
                                    {product.title}
                                </h2>

                                <p className="text-gray-600 mt-2">
                                    {product.description}
                                </p>

                                <p className="text-blue-600 font-bold text-xl mt-3">
                                    PKR {product.price}
                                </p>

                                <span className="inline-block mt-3 bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm">
                                    {product.category}
                                </span>

                            </div>

                            {/* Delete Button */}

                            <button
                                onClick={()=>{deleteproduct(product._id)}}
                                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-3xl transition"
                            >
                                Delete
                            </button>

                        </div>

                    ))
                )}

            </div>

        </div>
    );
};

export default GetSellerProducts;