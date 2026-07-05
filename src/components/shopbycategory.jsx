import React from 'react'
import ShopCard from './shopcatcard'
import fp1 from '../assets/fp-1.jpg'
import fp2 from '../assets/fp-2.jpg'
import fp4 from '../assets/fp-4.jpg'
import sc1 from '../assets/sc1.jpg'
import sc2 from '../assets/sc2.jpg'
import sc3 from '../assets/sc3.jpg'


const Shopbycategory = () => {

    const CardsList = [
        { image: fp1, productName: 'Audio', productNumber: '12' },
        { image: fp2, productName: 'Input Devices', productNumber: '8' },
        { image: fp4, productName: 'Connectivity', productNumber: '13' },
        { image: sc1, productName: 'Charging', productNumber: '22' },
        { image: sc2, productName: 'Protection', productNumber: '15' },
        { image: sc3, productName: 'Desk Setup', productNumber: '9' }
    ]

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
