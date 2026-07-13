import { Star } from 'lucide-react'
import TestimonialCard from './TestimonialCard'

const testimonials = [
    {
        rating: 5,
        title: 'ProBud X Pro - Life-changing ANC',
        review: 'Switched from Sony XM5 and never looked back. The ANC is genuinely best-in-class. I was on a transatlantic flight and completely forgot the engines...',
        initial: 'M',
        name: 'Marcus Holloway',
        date: 'December 12, 2024',
    },
    {
        rating: 5,
        title: 'KeyBoard Zero - Worth every dollar',
        review: 'As a software engineer who types 8+ hours a day, this keyboard is a revelation. The gasket mount absorbs all the hand fatigue. Sound is satisfying without being...',
        initial: 'P',
        name: 'Priya Sharma',
        date: 'November 28, 2024',
    },
    {
        rating: 5,
        title: 'TrackForce Air - Butter smooth',
        review: 'Migrated from a wired setup to this and the latency difference is imperceptible. The shape took one day to get used to but now my old mouse feels like a toy...',
        initial: 'J',
        name: 'James Whitfield',
        date: 'January 3, 2025',
    },
    {
        rating: 4,
        title: 'HubMax 8-in-1 - Desk essential',
        review: 'Replaced three separate dongles with this single hub. 4K output is flawless with zero dropped frames. Dropped one star only because the cable could be slightly...',
        initial: 'S',
        name: 'Sofia Mendez',
        date: 'October 19, 2024',
    },
]

const Testimonials = () => {
    return (
        <section className='w-full bg-[#f8fafc] py-16 sm:py-20'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='text-center'>
                    <p className='text-xs font-bold uppercase tracking-[0.28em] text-blue-600'>Social Proof</p>
                    <h2 className='mt-3 text-3xl font-bold text-slate-950 sm:text-4xl'>What Customers Say</h2>
                    <div className='mt-5 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-700'>
                        <div className='flex items-center gap-1 text-amber-400'>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} size={15} className='fill-current' />
                            ))}
                        </div>
                        <span>4.8 out of 5 - 12,000+ verified reviews</span>
                    </div>
                </div>

                <div className='mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4'>
                    {testimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.name} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
