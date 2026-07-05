import Hero from '../components/hero'
import ProductCard from '../components/ProductCard'
import HeroContent from '../components/HeroContent'
import Shopbycategory from '../components/shopbycategory'
import WhyNovaTech from '../components/WhyNovaTech'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import fp1 from '../assets/fp-1.jpg'
import fp2 from '../assets/fp-2.jpg'
import fp3 from '../assets/fp-3.jpg'
import fp4 from '../assets/fp-4.jpg'

const products = [
    { image: fp1, category: 'Audio', title: 'ProBud X Pro', description: 'Silence the world. Hear what matters.', price: '249.00', oldPrice: '299.00', badge: 'SALE', rating: '4.8', reviews: '2,847' },
    { image: fp2, category: 'Input Devices', title: 'TrackForce Air', description: 'Precision without limits.', price: '159.00', rating: '4.7', reviews: '1,204' },
    { image: fp3, category: 'Input Devices', title: 'KeyBoard Zero', description: 'Every keystroke, an experience.', price: '299.00', oldPrice: '349.00', badge: 'SALE', rating: '4.6', reviews: '986' },
    { image: fp4, category: 'Connectivity', title: 'HubMax 8-in-1', description: 'One port. Every connection.', price: '129.00', rating: '4.9', reviews: '3,521' },
]

const Home = () => {
    return (
        <>
            <Hero />
            <HeroContent />
            <div className='grid grid-cols-1 gap-6 sm:mx-2 sm:grid-cols-2 md:grid-cols-4 lg:mx-40'>
                {products.map((p, i) => (
                    <ProductCard key={i} {...p} />
                ))}
            </div>
            <Shopbycategory />
            <WhyNovaTech />
            <Testimonials />
            <Newsletter />
            <Footer />
        </>
    )
}

export default Home
