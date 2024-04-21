import express from 'express';

const app=express()

app.use(express.json({limit:"20kb"}))
app.use(express.urlencoded({extended:true,limit:"20kb"}))

import userRoutes from './routes/user.routes.js'

app.use('/user',userRoutes)

export default app;