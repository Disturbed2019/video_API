require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const mainRouter = require('./routes/mainRouter')
const path = require('path')


const app = express()

app.use(cors())

app.use(express.json({extended:true}))
app.use(express.static(path.resolve(__dirname, 'client/public/assets')))
app.use(fileUpload({}))


app.use('/api', mainRouter)




const PORT = process.env.PORT   || 5000
async function start() {
    try{
        await mongoose.connect((process.env.MONGO_URI), {
            useNewUrlParser: true,
            useUnifiedTopology:true,
        })
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
    } catch (e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}
start();
