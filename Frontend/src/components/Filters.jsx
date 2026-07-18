import FiltersCategories from './FiltersCategories'
import { useState } from 'react';
import { Funnel } from 'lucide-react';
import Starrating from './Starrating';

const Filters = ({ selectedcategory, setselectedcategory, value, setvalue }) => {


    const CatList = [
        { Title: 'All Products' },
        { Title: 'Laptop' },
        { Title: 'Smartphone' },
        { Title: 'Headphones' },
        { Title: 'Smart Watch' },
        { Title: 'Gaming' },
        { Title: 'Accessories' },
    ]
    return (
        <aside className='w-full border-r border-slate-200 bg-white px-5 py-4 mt-15 rounded-2xl lg:w-64 lg:shrink-0'>
            <div className='flex gap-2 items-center pt-4 '>
                <Funnel />
                <h1 className='font-semibold text-xl'>Filters</h1>
            </div>
            <div>
                <h1 className='font-semibold pt-10 pl-3'>Category</h1>
            </div>
            <div className='flex flex-col gap-2 pt-4'>
                {CatList.map((p, i) => (
                    <FiltersCategories key={i} {...p} selectedcategory={selectedcategory} setselectedcategory={setselectedcategory} />
                ))}
            </div>
            <div className='w-full pt-5 '>
                <input className='w-full' type='range' min='0' max='100000' value={value} onChange={(e) => {
                    console.log(Number(e.target.value))
                    setvalue(Number(e.target.value))
                }} ></input>
            </div>
            <div className='w-full  flex justify-between'>
                <span>$0</span>
                <span>${value}</span>
            </div>

            <div className='mt-7'>
                <Starrating Rating={4} />
                <Starrating Rating={3} />
            </div>
            <div className='pt-5 font-semibold'>
                <h1>Availability</h1>
            </div>
            <div className='flex gap-3 pt-3'>
                <input type='checkbox' ></input>
                <span>In Stock Only</span>
            </div>


        </aside>
    )
}

export default Filters
