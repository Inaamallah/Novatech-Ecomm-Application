import React from 'react'
import { ArrowRight } from 'lucide-react'

const CategoriesTile = ({ img, Title, Description, Number }) => {
    return (
        <div className='group w-full rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(37,99,235,0.22)]'>
            <div className='overflow-hidden rounded-[1.5rem] bg-slate-100'>
                <img
                    src={img}
                    alt={Title}
                    className='h-56 w-full object-cover transition duration-500 group-hover:scale-110'
                />
            </div>

            <div className='mt-5 flex flex-col gap-3'>
                <div className='flex items-start justify-between gap-3'>
                    <div className='flex-1'>
                        <h3 className='text-xl font-semibold text-slate-900 transition-colors duration-500'>
                            {Title}
                        </h3>
                        <p className='mt-2 text-sm leading-6 text-slate-500 transition-colors duration-500'>
                            {Description}
                        </p>
                    </div>

                    <div className='flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white'>
                        <ArrowRight className='h-5 w-5 transition-transform duration-500 group-hover:translate-x-1' />
                    </div>
                </div>

                <span className='text-sm font-medium text-slate-500 transition-colors duration-500'>
                    {Number}
                </span>
            </div>
        </div>
    )
}

export default CategoriesTile
