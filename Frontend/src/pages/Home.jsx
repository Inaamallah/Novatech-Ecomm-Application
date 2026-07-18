import { useState, useEffect } from 'react'
import axios from 'axios'
import Hero from '../components/hero'
import ProductCard from '../components/ProductCard'
import HeroContent from '../components/HeroContent'
import Shopbycategory from '../components/shopbycategory'
import WhyNovaTech from '../components/WhyNovaTech'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/product/getallproducts')
                setProducts(response.data.products)
            } catch (error) {
                console.error('Error fetching products:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchProducts()
    }, [])

    // Show the first 4 products on the home page grid
    const featuredProducts = products.slice(0, 4)

    return (
        <>
            <Hero />
            <HeroContent />
            
            {loading ? (
                <div className="text-center text-xl my-20">Loading Featured Products...</div>
            ) : (
                <div className='grid grid-cols-1 gap-6 sm:mx-2 sm:grid-cols-2 md:grid-cols-4 lg:mx-40 py-10'>
                    {featuredProducts.map((p) => (
                        <ProductCard key={p._id} {...p} />
                    ))}
                </div>
            )}

            <Shopbycategory products={products} />
            <WhyNovaTech />
            <Testimonials />
            <Newsletter />
            <Footer />
        </>
    )
}

export default Home
