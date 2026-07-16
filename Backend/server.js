const app = require('./src/app')
const connectDb = require('./src/db/db')


app.listen(3000, () => {
    console.log('Server running successfully on port 3000')
})

connectDb()