import { Camera, MessageCircle, Send, Video, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerLinks = [
    {
        title: 'Shop',
        links: [
            { label: 'All Products', to: '/shop' },
            { label: 'Categories', to: '/categories' },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'About Us', to: '/about' },
            { label: 'Contact', to: '/contact' },
        ],
    },
    {
        title: 'Support',
        links: [
            { label: 'Cart', to: '/cart' },
        ],
    },
]

const socialLinks = [
    { label: 'Instagram', icon: Camera },
    { label: 'Twitter', icon: Send },
    { label: 'Facebook', icon: MessageCircle },
    { label: 'YouTube', icon: Video },
]

const Footer = () => {
    return (
        <footer className='w-full bg-[#020817] text-slate-300'>
            <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
                <div className='grid gap-12 lg:grid-cols-[1.4fr_2fr]'>
                    <div>
                        <Link to='/' className='inline-flex items-center gap-0 text-xl font-bold text-white'>
                            <span className='flex h-9 w-9 mr-2 items-center justify-center rounded-full bg-blue-600 text-white'>
                                <Zap size={20} className='fill-current' />
                            </span>
                            Nova
                            <span className='text-blue-600 '>Tech</span>
                        </Link>

                        <p className='mt-5 max-w-sm text-sm leading-6 text-slate-300'>
                            Premium technology accessories engineered for those who demand more. Designed in San Francisco, built for everywhere.
                        </p>

                        <div className='mt-8 flex gap-3'>
                            {socialLinks.map(({ label, icon: Icon }) => (
                                <a
                                    key={label}
                                    href='#'
                                    aria-label={label}
                                    className='flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition hover:bg-blue-600 hover:text-white'
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className='grid grid-cols-1 gap-8 sm:grid-cols-3'>
                        {footerLinks.map((group) => (
                            <div key={group.title}>
                                <h3 className='text-sm font-bold text-white'>{group.title}</h3>
                                <div className='mt-5 flex flex-col gap-4'>
                                    {group.links.map((link) => (
                                        <Link key={link.label} to={link.to} className='text-sm text-slate-300 transition hover:text-white'>
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='mt-16 flex flex-col gap-6 border-t border-slate-800 pt-8 text-xs text-slate-300 sm:flex-row sm:items-center sm:justify-between'>
                    <p>© 2025 NovaTech, Inc. All rights reserved.</p>
                    <div className='flex flex-wrap gap-5'>
                        <a href='#' className='transition hover:text-white'>Privacy Policy</a>
                        <a href='#' className='transition hover:text-white'>Terms of Service</a>
                        <a href='#' className='transition hover:text-white'>Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
