import Nav from './components/nav'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/about';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Categories from './pages/Categories';
import PagenotFound from './pages/PagenotFound';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard'
import CreateProduct from './pages/CreateProduct'
import GetProducts from './pages/GetProducts'

const App = () => {
  return (
    <div className='w-full'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/faq' element={<Faq />} /> */}
        <Route path='/contact' element={<Contact />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='*' element={<PagenotFound />} />
        <Route path='/login' element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path = "/dashboard" element={<Dashboard />} />
        <Route path = "/create-product" element={<CreateProduct />} />
        <Route path = "/all-products" element = {<GetProducts />} />


      </Routes>
    </div>

  )
}

export default App
