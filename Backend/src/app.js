const express = require('express')
const cookieParser = require('cookie-parser')
const authRoutes = require('./routes/auth.routes')
const dashboardRoutes = require('./routes/dashboard.routes')
const productRoutes = require('./routes/product.routes')
const cors = require('cors')
const app = express()


app.use(cors({
    origin: ['http://localhost:5173',"https://novastech.vercel.app"],
    credentials: true
}))



app.use(express.json())
app.use(cookieParser())
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use('/api/auth', authRoutes)
app.use('/api', dashboardRoutes)
app.use('/api/product', productRoutes)
module.exports = app