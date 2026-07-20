import React, { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { AuthContext } from '../context/Auth.context'



const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    const { fetchData } = useContext(AuthContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, formData,{withCredentials: true})
            await fetchData()
            alert('Logged in successfully')
            navigate('/dashboard')
        } catch (error) {
            console.log(error)
            alert('Invalid email or password')
        }
        setFormData({
            email: '',
            password: ''
        })
    }
    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
            <div className="w-full max-w-md bg-white border border-gray-200 rounded-3xl shadow-xl p-6 sm:p-8">

                {/* Heading */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-blue-600">
                        Welcome Back
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Login to continue to your account
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-5">

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
                            placeholder="Enter your password"
                            className="w-full px-5 py-3 border border-gray-300 rounded-3xl outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"
                        />
                    </div>

                    {/* Forgot Password */}
                    <div className="text-right">
                        <button
                            type="button"
                            className="text-blue-600 hover:underline text-sm"
                        >
                            Forgot Password?
                        </button>
                    </div>

                    {/* Login Button */}
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-3xl font-semibold hover:bg-blue-700 transition duration-300"
                    >
                        Login
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-8">
                    <div className="flex-1 border-t"></div>
                    <span className="px-3 text-gray-400 text-sm">
                        OR
                    </span>
                    <div className="flex-1 border-t"></div>
                </div>

                {/* Register */}
                <div className="text-center">
                    <p className="text-gray-600 mb-4">
                        Don't have an account?
                    </p>

                    <Link to="/register">
                        <button
                            className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-3xl font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
                        >
                            Create Account
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Login;
