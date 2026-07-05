import { Award, RotateCcw, Shield, Truck } from 'lucide-react'
import PromiseCard from './PromiseCard'

const promises = [
    {
        icon: Truck,
        title: 'Free Shipping',
        description: 'On all orders over $75. Express and overnight options available at checkout.',
    },
    {
        icon: Shield,
        title: '2-Year Warranty',
        description: 'Every product backed by our industry-leading manufacturer warranty.',
    },
    {
        icon: RotateCcw,
        title: '30-Day Returns',
        description: 'Not satisfied? Return anything within 30 days, no questions asked.',
    },
    {
        icon: Award,
        title: 'Premium Quality',
        description: 'Crafted from aerospace-grade materials with obsessive attention to detail.',
    },
]

const WhyNovaTech = () => {
    return (
        <section className='w-full bg-white py-16 sm:py-20'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='text-center'>
                    <p className='text-xs font-bold uppercase tracking-[0.28em] text-blue-600'>Our Promise</p>
                    <h2 className='mt-3 text-3xl font-bold text-slate-950 sm:text-4xl'>Why NovaTech?</h2>
                </div>

                <div className='mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4'>
                    {promises.map((promise) => (
                        <PromiseCard key={promise.title} {...promise} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyNovaTech
