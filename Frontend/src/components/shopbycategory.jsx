import React from 'react'
import ShopCard from './shopcatcard'
import fp1 from '../assets/fp-1.jpg'
import fp2 from '../assets/fp-2.jpg'
import fp4 from '../assets/fp-4.jpg'
import sc1 from '../assets/sc1.jpg'
import sc2 from '../assets/sc2.jpg'
import sc3 from '../assets/sc3.jpg'


const Shopbycategory = ({ products = [] }) => {

    const categories = [
        { name: 'Laptop', image: fp1 },
        { name: 'Smartphone', image: fp2 },
        { name: 'Headphones', image: fp4 },
        { name: 'Smart Watch', image: sc1 },
        { name: 'Gaming', image: sc2 },
        { name: 'Accessories', image: sc3 }
    ]

    const CardsList = categories.map(cat => {
        const count = products.filter(p => p.category === cat.name).length
        return {
            image: cat.image,
            productName: cat.name,
            productNumber: count.toString()
        }
    })

    return (
        <section className='bg-[#f8fafc] w-full mt-20 py-16'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='text-center mb-10'>
                    <p className='text-blue-500 text-sm uppercase tracking-[0.4em] font-semibold'>Browse</p>
                    <h1 className='text-slate-900 font-bold text-3xl sm:text-4xl mt-4'>Shop by Category</h1>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
                    {CardsList.map((p, i) => (
                        <ShopCard key={i} {...p} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Shopbycategory
