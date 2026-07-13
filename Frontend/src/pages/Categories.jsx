import React from 'react'
import CategoriesTile from '../components/CategoriesTile'
import fp1 from '../assets/fp-1.jpg'
import fp2 from '../assets/fp-2.jpg'
import fp3 from '../assets/fp-3.jpg'
import fp4 from '../assets/fp-4.jpg'
import sc1 from '../assets/sc1.jpg'
import sc2 from '../assets/sc2.jpg'
import sc3 from '../assets/sc3.jpg'
import Footer from '../components/Footer'

const Categories = () => {
    const data = [
        {
            img: fp1,
            Title: 'Audio',
            Description: 'Earbuds, headphones & speakers',
            Number: '12 products',
        },
        {
            img: fp2,
            Title: 'Input Devices',
            Description: 'Keyboards, mice & trackpads',
            Number: '8 products',
        },
        {
            img: fp4,
            Title: 'Connectivity',
            Description: 'Hubs, cables & adapters',
            Number: '15 products',
        },
        {
            img: sc1,
            Title: 'Charging',
            Description: 'Wireless & wired charging solutions',
            Number: '9 products',
        },
        {
            img: sc2,
            Title: 'Protection',
            Description: 'Cases, sleeves & screen protectors',
            Number: '11 products',
        },
        {
            img: sc3,
            Title: 'Desk Setup',
            Description: 'Stands, mounts & organizers',
            Number: '7 products',
        },
    ]

    return (
        <>
            <section className='w-full bg-slate-50 px-4 py-10 sm:px-6 lg:px-8'>
                <div className='mx-auto max-w-7xl'>
                    <div className='mb-8 text-center sm:text-left'>
                        <p className='text-sm font-semibold uppercase tracking-[0.3em] text-blue-600'>Shop by Category</p>
                        <h2 className='mt-2 text-3xl font-bold text-slate-900 sm:text-4xl'>Explore our featured collections</h2>
                        <p className='mt-3 text-base text-slate-600 sm:max-w-2xl'>Browse the latest essentials for work, travel, and everyday tech in a clean and modern layout.</p>
                    </div>

                    <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8'>
                        {data.map((p, i) => (
                            <CategoriesTile key={i} {...p} />
                        ))}
                    </div>
                </div>
            </section>
            <div className='mt-15'>
                <Footer />
            </div>

        </>



    )
}

export default Categories
