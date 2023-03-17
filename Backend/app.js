import dotenv from 'dotenv'
import express from "express"
import connectDB from './dataBase/connection.js'
import empRoutes from './routes/empRoutes.js'
import cors from 'cors'
import bodyParser from 'body-parser'
dotenv.config()



const port = process.env.PORT
const url = process.env.URL

connectDB(url)


const App = express()

App.use(bodyParser.json())
App.use(bodyParser.urlencoded({ extended: true }))

App.use(cors())
App.use('/', empRoutes)

App.listen(port, () => {
    console.log(`server Started at port http://localhost:${port}`)
})