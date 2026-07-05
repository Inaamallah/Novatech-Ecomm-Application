import { ChevronLeft, ChevronRight, Grid2X2, Heart, List, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import fp1 from '../assets/fp-1.jpg'
import fp2 from '../assets/fp-2.jpg'
import fp3 from '../assets/fp-3.jpg'
import fp4 from '../assets/fp-4.jpg'
import sc1 from '../assets/sc1.jpg'
import sc2 from '../assets/sc2.jpg'

const products = [
    {
        image: fp1,
        badge: 'SALE',
        discount: '-17%',
        category: 'Audio',
        title: 'ProBud X Pro',
        description: 'Silence the world. Hear what matters.',
        price: '$249.00',
        oldPrice: '$299.00',
        rating: 5,
        reviews: '2,847',
        colors: ['bg-slate-900', 'bg-slate-100', 'bg-blue-500'],
    },
    {
        image: fp2,
        badge: 'HOT',
        category: 'Input Devices',
        title: 'TrackForce Air',
        description: 'Precision without limits.',
        price: '$159.00',
        rating: 4,
        reviews: '1,204',
        colors: ['bg-slate-500', 'bg-slate-950'],
    },
    {
        image: fp3,
        badge: 'SALE',
        discount: '-14%',
        category: 'Input Devices',
        title: 'KeyBoard Zero',
        description: 'Every keystroke, an experience.',
        price: '$299.00',
        oldPrice: '$349.00',
        rating: 5,
        reviews: '986',
        colors: ['bg-slate-100', 'bg-slate-700'],
    },
    {
        image: fp4,
        badge: 'NEW',
        category: 'Connectivity',
        title: 'HubMax 8-in-1',
        description: 'One port. Every connection.',
        price: '$129.00',
        rating: 4,
        reviews: '3,521',
        colors: ['bg-slate-500', 'bg-slate-300'],
    },
    {
        image: sc1,
        category: 'Charging',
        title: 'HaloCharge 15',
        description: '15W wireless. Zero compromise.',
        price: '$79.00',
        rating: 4,
        reviews: '1,872',
        colors: ['bg-slate-950', 'bg-slate-100'],
    },
    {
        image: sc2,
        badge: 'NEW',
        category: 'Protection',
        title: 'UltraSlim Sleeve 14',
        description: 'Protection engineered to disappear.',
        price: '$89.00',
        rating: 4,
        reviews: '641',
        colors: ['bg-slate-500', 'bg-amber-200', 'bg-slate-950'],
    },
]

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

const Shop = () => {
    return (
        <main className='min-h-screen bg-[#f8fafc] text-slate-950'>
            <section className='bg-white'>
                <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
                    <nav className='flex items-center gap-3 text-lg text-slate-500'>
                        <Link to='/' className='transition hover:text-blue-600'>Home</Link>
                        <ChevronRight size={18} />
                        <span className='font-semibold text-slate-950'>Shop</span>
                    </nav>
                    <h1 className='mt-4 text-3xl font-bold text-slate-950 sm:text-4xl'>All Products</h1>
                </div>
            </section>

            <section className='mx-auto max-w-7xl px-4 py-9 sm:px-6 lg:px-8'>
                <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
                    <p className='text-sm text-slate-500'>8 products</p>

                    <div className='flex items-center gap-3'>
                        <select className='h-11 w-full rounded-full border border-slate-200 bg-white px-5 text-sm text-slate-600 outline-none sm:w-56'>
                            <option>Featured</option>
                            <option>Newest</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                        <div className='flex rounded-full border border-slate-200 bg-white p-1'>
                            <button className='flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white' aria-label='Grid view'>
                                <Grid2X2 size={17} />
                            </button>
                            <button className='flex h-9 w-9 items-center justify-center rounded-full text-slate-400' aria-label='List view'>
                                <List size={17} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className='mt-7 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3'>
                    {products.map((product) => (
                        <ProductTile key={product.title} {...product} />
                    ))}
                </div>

                <div className='mt-12 flex items-center justify-center gap-3'>
                    <button className='flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-300' aria-label='Previous page'>
                        <ChevronLeft size={18} />
                    </button>
                    <button className='flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white'>1</button>
                    <button className='flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-sm text-slate-600'>2</button>
                    <button className='flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500' aria-label='Next page'>
                        <ChevronRight size={18} />
                    </button>
                </div>
            </section>
        </main>
    )
}

export default Shop
