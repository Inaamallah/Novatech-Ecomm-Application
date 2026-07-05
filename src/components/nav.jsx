import { Link } from 'react-router-dom'
import { Search, Heart, ShoppingCart, Zap } from 'lucide-react'

const Nav = () => {
    return (
        <div className='text-black  bg-white flex justify-between sm:px-5 lg:px-40 py-5 items-center '>
            <div className='flex items-center'>
                <Link to='/' className='inline-flex items-center gap-0 text-xl font-bold text-black'>
                    <span className='flex h-9 w-9 mr-2 items-center justify-center rounded-full bg-blue-600 text-white'>
                        <Zap size={20} className='fill-current' />
                    </span>
                    Nova
                    <span className='text-blue-500 '>Tech</span>
                </Link>

            </div>

            <div className=' md:gap-4 opacity-80 sm:text-[1rem] lg:text-[1.2rem] hidden md:flex'>
                <Link to="/shop">Shop</Link>
                <Link to="/categories">Categories</Link>
                <Link to="/about">About</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/contact">Contact</Link>
            </div>


            <div className='flex gap-4'>
                <Search />
                <Heart />
                <ShoppingCart />
            </div>


        </div>
    )
}

export default Nav
