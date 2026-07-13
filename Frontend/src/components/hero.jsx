import React from 'react'
import heroImg from '../assets/hero.jpg'
import { Circle } from 'lucide-react'

const Hero = () => {
    return (
        <section className="w-full bg-linear-to-r from-[#000000] via-[#0a2159] to-[#000000] text-white">
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">

                    {/* Left column */}
                    <div className="w-full lg:w-1/2">
                        <span className="inline-flex items-center gap-3 bg-[#081433] border border-[#1f4db8] text-blue-300 px-4 py-2 rounded-full text-sm mb-6">
                            <span className="w-2 h-2 bg-blue-400 rounded-full inline-block" />
                            New: ProBud X Pro — Now Available
                        </span>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
                            Technology <br />
                            <span className=" bg-linear-to-r from-[#398cff] to-[#203ed1] bg-clip-text text-transparent">Elevated.</span>
                        </h1>

                        <p className="text-gray-300 mt-6 max-w-xl">
                            Premium accessories engineered for the way you work, create, and connect. Every detail considered. Nothing left to chance.
                        </p>

                        <div className="mt-8 flex items-center gap-6">
                            <button className="bg-[#2f7bff] hover:bg-[#1f63e6] transition px-6 py-3 rounded-full text-white font-medium shadow-lg">Shop Collection</button>
                            <button className="text-gray-400 hover:text-white">Our Story</button>
                        </div>

                        <div className="mt-12 border-t border-white/5 pt-8 flex gap-12 text-gray-300">
                            <div>
                                <div className="text-xl font-bold text-white">50K+</div>
                                <div className="text-sm">Happy Customers</div>
                            </div>
                            <div>
                                <div className="text-xl font-bold text-white">4.8★</div>
                                <div className="text-sm">Average Rating</div>
                            </div>
                            <div>
                                <div className="text-xl font-bold text-white">2-Yr</div>
                                <div className="text-sm">Warranty</div>
                            </div>
                        </div>
                    </div>

                    {/* Right column - product card */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10">
                        <div className="relative">
                            <div className="w-fit  bg-transparent rounded-4xl shadow-5xl flex items-center justify-center overflow-hidden lg:size-100 sm:size-70 ">
                                <img src={heroImg} alt="product" className="object-contain w-full h-full shadow-lg " />
                            </div>

                            <div className="absolute -top-4 -right-4 bg-white text-black rounded-xl px-3 py-2 shadow">
                                <div className="text-xs text-yellow-500">★★★★★</div>
                                <div className="text-xs">2,847 reviews</div>
                            </div>

                            <div className="absolute -bottom-6 -left-6 bg-white text-black rounded-xl px-4 py-3 shadow-lg w-40 ">
                                <div className="flex items-center gap-3">
                                    <div className="bg-[#2f7bff] text-white rounded-full w-8 h-8 flex items-center justify-center">🛒</div>
                                    <div>
                                        <div className="text-sm text-gray-500">ProBud X Pro</div>
                                        <div className="lg:text-lg sm:text-sm font-bold text-[#2f7bff]">$249</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero