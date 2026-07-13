import React from 'react'
import { Link } from 'react-router-dom'
import WhyNovaTech from '../components/WhyNovaTech'
import Footer from '../components/Footer'

const About = () => {
    return (
        <main className='w-full text-slate-900'>

            {/* Hero / Header */}
            <header className='w-full bg-linear-to-r from-[#031026] via-[#071433] to-[#031026] text-white'>
                <div className='mx-auto max-w-7xl px-4 py-20 sm:py-28 lg:py-20'>
                    <div className='text-center'>
                        <p className='text-xs font-semibold uppercase tracking-[0.28em] text-blue-400'>Our Story</p>
                        <h1 className='mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl'>
                            We believe technology
                            <br />should feel effortless.
                        </h1>
                        <p className='mx-auto mt-4 max-w-2xl text-sm text-slate-300'>
                            NovaTech was founded in 2026 by engineers frustrated with accessories that looked premium but performed average. We set out to close that gap for good.
                        </p>
                    </div>
                </div>
            </header>

            {/* Mission + Stats */}
            <section className='w-full bg-white'>
                <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center'>
                        <div className='lg:col-span-2'>
                            <p className='text-xs font-bold uppercase tracking-[0.28em] text-blue-500'>Mission</p>
                            <h2 className='mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-4xl'>Engineering excellence at every scale.</h2>
                            <p className='mt-6 max-w-xl text-sm text-slate-600 leading-relaxed'>Every product in the NovaTech lineup goes through 18 months of design, engineering, and real-world testing before it reaches you. We do not release products that do not earn a place in your bag.
                                <br /><br />We are a team of 60 people in San Francisco, Shenzhen, and London — obsessed with making the products we ourselves wish existed.
                            </p>
                        </div>

                        <div className='flex justify-end lg:col-span-1'>
                            <div className='grid grid-cols-2 gap-4 w-full max-w-xs lg:max-w-sm'>
                                <div className='rounded-xl border border-slate-100 bg-[#eef6ff] p-6 text-center shadow-sm'>
                                    <div className='text-3xl font-extrabold text-blue-600'>50K+</div>
                                    <div className='mt-2 text-xs text-slate-500'>Customers worldwide</div>
                                </div>

                                <div className='rounded-xl border border-slate-100 bg-white p-6 text-center shadow-sm'>
                                    <div className='text-3xl font-extrabold text-slate-900'>4.8★</div>
                                    <div className='mt-2 text-xs text-slate-500'>Average rating</div>
                                </div>

                                <div className='rounded-xl border border-slate-100 bg-white p-6 text-center shadow-sm'>
                                    <div className='text-3xl font-extrabold text-slate-900'>2019</div>
                                    <div className='mt-2 text-xs text-slate-500'>Founded in SF</div>
                                </div>

                                <div className='rounded-xl border border-slate-100 bg-[#eef6ff] p-6 text-center shadow-sm'>
                                    <div className='text-3xl font-extrabold text-blue-600'>62+</div>
                                    <div className='mt-2 text-xs text-slate-500'>Products launched</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What drives us */}
            <WhyNovaTech />

            {/* CTA section */}
            <section className='w-full bg-blue-600 text-white'>
                <div className='mx-auto w-full px-4 py-20 sm:px-6 lg:px-8 items-center justify-center flex flex-col gap-8'>
                    <div className='items-center gap-8 lg:grid-cols-[1.5fr_1fr] flex flex-col justify-center '>
                        <div>
                            <p className='mt-4 text-3xl font-bold sm:text-4xl  text-center pb-5'>Ready to upgrade your setup?</p>
                            <h2 className='text-xs font-semibold uppercase tracking-[0.28em] text-blue-200 text-center'>Shop the full NovaTech collection and find your next favorite accessory.</h2>
                        </div>


                    </div>

                    <div className='flex justify-start lg:justify-end'>
                        <Link
                            to='/shop'
                            className='inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-950 shadow-lg transition duration-300 hover:bg-slate-100'
                        >
                            Shop Now →
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

export default About
