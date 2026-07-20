import { Link,useNavigate } from 'react-router-dom'
import { Search, Heart, ShoppingCart, Zap,UserRound } from 'lucide-react'
import { useContext } from 'react'
import {AuthContext} from '../context/Auth.context'
import axios from 'axios'




const Nav = () => {
    const {islogin,userdata,fetchData} = useContext(AuthContext)
    const navigate = useNavigate();

    async function handleLogout() {
        try {
            await axios.post(
                "http://localhost:3000/api/auth/logout",
                {},
                {
                    withCredentials: true,
                }
            );
    
            await fetchData();
    
            alert("See you soon :)");
            navigate("/");
        } 
        catch (err) {
            console.log(err);
            alert("Error logging out");
        }
    }

    return (
        <div className='text-black  bg-white flex justify-between sm:px-5 lg:px-20 py-5 items-center '>
            <div className='flex items-center'>
                <Link to='/' className='inline-flex items-center gap-0 text-xl font-bold text-black'>
                    <span className='flex h-9 w-9 mr-2 items-center justify-center rounded-full bg-blue-600 text-white'>
                        <Zap size={20} className='fill-current' />
                    </span>
                    Nova
                    <span className='text-blue-600 '>Tech</span>
                </Link>

            </div>

            <div className=' md:gap-4 opacity-80 sm:text-[1rem] lg:text-[1rem] hidden md:flex'>
                <Link to="/shop">Shop</Link>
                <Link to="/categories">Categories</Link>
                <Link to="/about">About</Link>
                {/* <Link to="/faq">FAQ</Link> */}
                <Link to="/contact">Contact</Link>
            </div>

            <div className='flex items-center gap-10'>
                {/* <div className='hidden lg:flex items-center gap-4'>
                    <Search />
                    <Heart />
                    <ShoppingCart />
                </div> */}

                {
                islogin ? (
                    <div className='gap-4 flex items-center'>

                        <div className='flex'>
                            <Link to = '/dashboard'>
                                <UserRound color="#034efc" />
                            </Link>
                        </div >

                        <div>
                            <button onClick = {handleLogout} className='bg-blue-600 text-white px-4 py-2 rounded-3xl hover:bg-blue-700 transition'>
                                Logout
                            </button>
                        </div >
                        
                    </div>

                    ) : (
                        <Link
                            to="/login"
                            className='bg-blue-600 text-white px-4 py-2 rounded-3xl hover:bg-blue-700 transition'
                        >
                            Login/Register
                        </Link>
                    )
                }
                
                    

                
            </div>
        </div>

    )
}

export default Nav
