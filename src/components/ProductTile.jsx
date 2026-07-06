import { Heart, Star } from 'lucide-react'


const ProductTile = ({ image, badge, discount, category, title, description, price, oldPrice, rating, reviews, colors }) => {
    return (
        <article className='overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg'>
            <div className='relative h-72 overflow-hidden bg-slate-100 sm:h-80 lg:h-72'>
                <img src={image} alt={title} className='h-full w-full object-cover transition duration-500 hover:scale-105' />

                <div className='absolute left-4 top-4 flex flex-col items-start gap-2'>
                    {badge && (
                        <span className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase ${badge === 'HOT' ? 'bg-orange-100 text-orange-600' : badge === 'NEW' ? 'bg-blue-100 text-blue-600' : 'bg-rose-100 text-rose-600'}`}>
                            {badge}
                        </span>
                    )}
                    {discount && (
                        <span className='rounded-full bg-rose-100 px-3 py-1 text-[11px] font-bold text-rose-600'>{discount}</span>
                    )}
                </div>

                <button className='absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm transition hover:text-rose-500' aria-label={`Add ${title} to wishlist`}>
                    <Heart size={20} />
                </button>
            </div>

            <div className='p-5'>
                <p className='text-[11px] font-bold uppercase text-blue-600'>{category}</p>
                <h2 className='mt-2 text-base font-bold text-slate-950'>{title}</h2>
                <p className='mt-2 text-sm text-slate-500'>{description}</p>

                <div className='mt-4 flex items-center gap-2'>
                    <div className='flex text-amber-400'>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} size={14} className={star <= rating ? 'fill-current' : 'fill-slate-200 text-slate-200'} />
                        ))}
                    </div>
                    <span className='text-xs text-slate-400'>({reviews})</span>
                </div>

                <div className='mt-4 flex items-end justify-between gap-4'>
                    <div className='flex items-center gap-2'>
                        <span className='text-base font-bold text-slate-950'>{price}</span>
                        {oldPrice && <span className='text-sm text-slate-400 line-through'>{oldPrice}</span>}
                    </div>
                    <div className='flex gap-1.5'>
                        {colors.map((color) => (
                            <span key={color} className={`h-3.5 w-3.5 rounded-full border border-slate-200 ${color}`} />
                        ))}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ProductTile
