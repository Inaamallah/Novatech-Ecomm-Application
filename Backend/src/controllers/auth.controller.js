const AuthModel = require('../models/auth.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

async function register(req, res) {
    try {
        const { fullName, email, password,confirmPassword,role } = req.body
        if(password !== confirmPassword) {
            return res.status(400).json({
                message: 'Password and confirm password do not match'
            })
        }
        hashedPassword = await bcrypt.hash(password, 10)
        const user = await AuthModel.create({ fullName, email, hashedPassword,role})
        const token = jwt.sign({
            id: user._id,
            role: user.role
        }, process.env.JWT_SECRET)


        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        res.status(201).json({
            message: 'User registered successfully'
        })
    } 
    catch (error) {
        
        res.status(500).json({
            message: 'Error registering user',
            error: error.message
        })
    }
}

async function login(req, res) {
    try {
        const { email, fullName, password } = req.body
        const user = await AuthModel.findOne({ 
            $or: [
                {email},{fullName}
            ]
         })
        if(!user) {
            return res.status(400).json({
                message: 'User not found'
            })
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.hashedPassword)
        if(!isPasswordCorrect) {
            return res.status(400).json({
                message: 'Invalid password'
            })
        }
        const token = jwt.sign({
            id: user._id,
            role: user.role
        }, process.env.JWT_SECRET)

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        res.status(200).json({
            message: 'Logged in successfully'
        })
    }
    catch (error) {
        res.status(500).json({
            message: 'Error logging in',
            error: error.message
        })
    }
}

async function logout(req,res){
    try{
        res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    })

    res.status(200).json({
        message: "Logged out successfully"
    });
    }
    catch(err){

    }
}

module.exports = { register, login, logout }