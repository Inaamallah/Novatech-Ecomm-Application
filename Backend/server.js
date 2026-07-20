const app = require('./src/app')
const connectDb = require('./src/db/db')


app.listen(process.env.PORT || 3000, () => {
    console.log('Server running successfully')
})

connectDb()