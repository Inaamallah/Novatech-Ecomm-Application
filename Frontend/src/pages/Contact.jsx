import React from 'react'
import Footer from '../components/Footer'

const Contact = () => {
    return (
        <main className='w-full text-slate-900'>
            {/* Hero */}
            <header className='w-full bg-slate-900 text-white'>
                <div className='mx-auto max-w-7xl px-4 py-20 sm:py-28 lg:py-28 text-center'>
                    <p className='text-xs font-semibold uppercase tracking-[0.28em] text-blue-400'>Get in touch</p>
                    <h1 className='mt-4 text-4xl font-extrabold sm:text-5xl'>Contact Us</h1>
                    <p className='mx-auto mt-4 max-w-2xl text-sm text-slate-400'>Our team responds within 4 business hours, Monday through Friday.</p>
                </div>
            </header>

            {/* Content */}
            <section className='w-full bg-white'>
                <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 gap-8 lg:grid-cols-12'>
                        {/* Left: Contact info */}
                        <div className='lg:col-span-4'>
                            <h3 className='text-lg font-semibold text-slate-900 mb-6'>Contact Information</h3>

                            <div className='space-y-6'>
                                <div className='flex items-start gap-4'>
                                    <div className='h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center'>
                                        <svg className='h-5 w-5 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'></path></svg>
                                    </div>
                                    <div className='flex-1'>
                                        <p className='text-xs text-slate-500'>Email</p>
                                        <p className='text-sm font-medium text-slate-900'>support@novatech.io</p>
                                    </div>
                                </div>

                                <div className='flex items-start gap-4'>
                                    <div className='h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center'>
                                        <svg className='h-5 w-5 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 5h2l.4 2M7 13h10l1-6H6.4M7 13L5.6 7M7 13l-2 7h12l-2-7M9 21h6'></path></svg>
                                    </div>
                                    <div className='flex-1'>
                                        <p className='text-xs text-slate-500'>Phone</p>
                                        <p className='text-sm font-medium text-slate-900'>+1 (415) 555-0192</p>
                                    </div>
                                </div>

                                <div className='flex items-start gap-4'>
                                    <div className='h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center'>
                                        <svg className='h-5 w-5 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17.657 16.657L13.414 12.414a4 4 0 10-5.657 5.657l4.243 4.243a8 8 0 0011.314-11.314l-4.243 4.243'></path></svg>
                                    </div>
                                    <div className='flex-1'>
                                        <p className='text-xs text-slate-500'>Address</p>
                                        <p className='text-sm font-medium text-slate-900'>548 Market St, San Francisco CA 94104</p>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-8'>
                                <h4 className='text-sm font-semibold text-slate-900 mb-4'>Business Hours</h4>
                                <div className='text-sm text-slate-600 space-y-2'>
                                    <div className='flex justify-between'><span>Mon – Fri</span><span>9 AM – 6 PM PST</span></div>
                                    <div className='flex justify-between'><span>Saturday</span><span>10 AM – 4 PM PST</span></div>
                                    <div className='flex justify-between'><span>Sunday</span><span>Closed</span></div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className='lg:col-span-8'>
                            <div className='rounded-xl border border-slate-100 p-8 shadow-sm bg-white'>
                                <h3 className='text-lg font-semibold text-slate-900 mb-6'>Send us a message</h3>

                                <form className='space-y-6'>
                                    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                                        <div>
                                            <label className='block text-xs text-slate-500 mb-2'>Full Name</label>
                                            <input type='text' placeholder='Jane Doe' className='w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200' />
                                        </div>

                                        <div>
                                            <label className='block text-xs text-slate-500 mb-2'>Email Address</label>
                                            <input type='email' placeholder='jane@example.com' className='w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200' />
                                        </div>
                                    </div>

                                    <div>
                                        <label className='block text-xs text-slate-500 mb-2'>Subject</label>
                                        <select className='w-full rounded-xl border border-slate-200 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-200'>
                                            <option>Select a topic</option>
                                            <option>Support</option>
                                            <option>Sales</option>
                                            <option>Partnership</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className='block text-xs text-slate-500 mb-2'>Message</label>
                                        <textarea rows='5' placeholder='How can we help?' className='w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200'></textarea>
                                    </div>

                                    <div>
                                        <button type='button' className='inline-flex items-center gap-3 rounded-full bg-blue-600 px-6 py-3 text-white font-semibold shadow hover:bg-blue-700'>
                                            <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'></path></svg>
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

export default Contact
