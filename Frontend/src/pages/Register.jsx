import React, { useContext, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../context/Auth.context'

const Register = () => {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'buyer'
    })

    const navigate = useNavigate()
    const { fetchData } = useContext(AuthContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/register`, formData,{withCredentials: true})
            await fetchData()
            alert('Account created successfully')
            navigate('/dashboard')
        } catch (error) {
            console.log(error)
            alert('Error creating account')
        }
        setFormData({
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
            role: 'buyer'
        })

        
    }
    
    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
            <div className="w-full max-w-md bg-white border border-gray-200 rounded-3xl shadow-xl p-6 sm:p-8">

                {/* Heading */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-blue-600">
                        Create Account
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Register to get started
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-5">

                    {/* Full Name */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Full Name
                        </label>

                        <input
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            type="text"
                            id="name"
                            placeholder="Enter your full name"
                            className="w-full px-5 py-3 border border-gray-300 rounded-3xl outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Email
                        </label>

                        <input 
                            value={formData.email}
                            onChange={(e)=>setFormData({ ...formData, email: e.target.value })}
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full px-5 py-3 border border-gray-300 rounded-3xl outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Password
                        </label>

                        <input
                            value={formData.password}
                            onChange={(e)=>setFormData({ ...formData, password: e.target.value })}
                            type="password"
                            id="password"
                            placeholder="Create a password"
                            className="w-full px-5 py-3 border border-gray-300 rounded-3xl outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label
                            htmlFor="confirmPassword"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Confirm Password
                        </label>

                        <input
                            value={formData.confirmPassword}
                            onChange={(e)=>setFormData({ ...formData, confirmPassword: e.target.value })}
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirm your password"
                            className="w-full px-5 py-3 border border-gray-300 rounded-3xl outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"
                        />
                    </div>

                    {/* Role */}
                    <div>
                        <label
                            htmlFor="role"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Role
                        </label>
                    
                        <select
                            value={formData.role}
                            onChange={(e)=>setFormData({ ...formData, role: e.target.value })}
                            id="role"
                            className="w-full px-5 py-3 border border-gray-300 rounded-3xl outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"
                        >
                            <option value="buyer">Buyer</option>
                            <option value="seller">Seller</option>
                        </select>
                    </div>

                    {/* Register Button */}
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-3xl font-semibold hover:bg-blue-700 transition duration-300"
                    >
                        Create Account
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-8">
                    <div className="flex-1 border-t"></div>
                    <span className="px-3 text-gray-400 text-sm">OR</span>
                    <div className="flex-1 border-t"></div>
                </div>

                {/* Login Link */}
                <div className="text-center">
                    <p className="text-gray-600 mb-4">
                        Already have an account?
                    </p>

                    <Link to="/login">
                        <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-3xl font-semibold hover:bg-blue-600 hover:text-white transition duration-300">
                            Login
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Register;

