import { ChevronLeft, ChevronRight, Grid2X2, List } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import ProductTile from '../components/ProductTile'
import Filters from '../components/Filters'
import Footer from '../components/Footer'
import axios from "axios";

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [selectedcategory, setselectedcategory] = useState('All Products')
    const [currentpage, setcurrentpage] = useState(1);
    const productsPerPage = 6;
    const startIndex = (currentpage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const [activebutton, setactivebutton] = useState('Previous');
    const [value, setvalue] = useState(100000);

    async function fetchProducts() {
        try {
            const response = await axios.get(
                "http://localhost:3000/api/product/getallproducts",
                { withCredentials: true } 
            );
            setProducts(response.data.products);
            console.log(response.data.products)
        } catch (error) {
            console.log(error);
        } 
    }
    useEffect(() => {
        fetchProducts();
    }, []);

    const filteredProducts =
        selectedcategory === "All Products"
            ? products.filter(
                product =>
                    parseFloat(product.price) <= value
            )
            : products.filter(
                product =>
                    product.category === selectedcategory &&
                    parseFloat(product.price) <= value
            );

    const currentProducts = filteredProducts.slice(startIndex, endIndex);

    

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

            <div className='mx-auto flex max-w-7xl flex-col lg:flex-row'>
                <Filters selectedcategory={selectedcategory} setselectedcategory={setselectedcategory} value={value} setvalue={setvalue} />

                <section className='min-w-0 flex-1 px-4 py-9 sm:px-6 lg:px-8'>
                    <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
                        <p className='text-sm text-slate-500'>{filteredProducts.length} products</p>

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
                        {currentProducts.map((product) => (
                            <ProductTile key={product._id} {...product} />
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className='mt-7 rounded-2xl border border-slate-200 bg-white p-10 text-center text-slate-500'>
                            No products found in this category.
                        </div>
                    )}

                    <div className='mt-12 flex items-center justify-center gap-3'>
                        <button className={`flex h-10 w-10 items-center justify-center rounded-full border
                                ${activebutton === "Previous"
                                ? "bg-blue-600 text-white"
                                : "border-slate-200 bg-white text-slate-600"
                            }`}
                            onClick={() => {
                                setcurrentpage(currentpage > 1 ? currentpage - 1 : 1);
                                setactivebutton('Previous')

                            }}>
                            <ChevronLeft size={18} />
                        </button>

                        <button className={`flex h-10 w-10 items-center justify-center rounded-full border
                                ${activebutton === "Next"
                                ? "bg-blue-600 text-white"
                                : "border-slate-200 bg-white text-slate-600"
                            }`} onClick={() => {
                                setcurrentpage(currentpage + 1)
                                setactivebutton('Next')
                            }}>
                            <ChevronRight size={18} />
                        </button>


                    </div>
                </section>
            </div >
            <Footer />
        </main >

    )
}

export default Shop
