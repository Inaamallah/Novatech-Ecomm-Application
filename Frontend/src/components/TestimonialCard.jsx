import { Star } from 'lucide-react'

const TestimonialCard = ({ rating, title, review, initial, name, date }) => {
    return (
        <article className='flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg'>
            <div className='flex items-center gap-1 text-amber-400'>
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        size={16}
                        className={star <= rating ? 'fill-current' : 'fill-slate-200 text-slate-200'}
                    />
                ))}
            </div>

            <h3 className='mt-4 text-base font-bold leading-6 text-slate-950'>{title}</h3>
            <p className='mt-4 flex-1 text-sm leading-6 text-slate-600'>{review}</p>

            <div className='mt-6 flex items-center gap-3 border-t border-slate-100 pt-5'>
                <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600'>
                    {initial}
                </div>
                <div>
                    <p className='text-sm font-bold text-slate-950'>{name}</p>
                    <p className='text-xs text-slate-500'>{date}</p>
                </div>
            </div>
        </article>
    )
}

export default TestimonialCard
