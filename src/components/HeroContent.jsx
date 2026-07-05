import React from 'react'
import { ArrowRight } from 'lucide-react'
const HeroContent = () => {
    return (
        <div className='flex flex-col sm:ml-10 sm:mr-10 lg:ml-35 lg:mr-50 py-10 justify-between'>
            <h1 className='text-blue-500 font-semibold uppercase'>HandPicked</h1>
            <div className='flex justify-between items-center'>
                <h1 className='text-black font-bold sm:text-3xl lg:text-4xl'>Featured Products</h1>
                <button className='border border-black px-4 py-1 w-fit rounded-2xl flex items-center gap-2 lg:text-xl'>View All<ArrowRight /></button>
            </div>
        </div>
    )
}

export default HeroContent
