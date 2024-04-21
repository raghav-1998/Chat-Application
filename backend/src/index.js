import dotenv from'dotenv'
import app from './app.js'
import connectDB from './db/index.js'
dotenv.config({
    path:'./.env'
})

connectDB()
.then(
    ()=>{
        //App is not connecting to db even after db get connected successfully
        app.on("error",(error)=>{
            console.log('Error:',error)
            process.exit(1)
        })
        
        // App is listening the db
        app.listen(process.env.PORT,()=>{
            console.log('App is listening on port',process.env.PORT)
        })
    }
)
.catch((error)=>{
    console.log('Mongo DB connection failed',error)
})
