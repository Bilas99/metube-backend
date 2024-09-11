// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/db.js";

dotenv.config({
   path: './env'
})

connectDB()
.then(() => {
   app.on("error", (err) => {
      console.log("ERROR ", err)
   })
   
   app.listen(process.env.PORT || 3000, () => {
      console.log(`App listening on port localhost:${process.env.PORT}`)
   })
})
.catch((err) => {
   console.log("MongoDB conection failed !!! ", err)
})








/********
import express from "express";
const app = express()

;( async () => {
   try {
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
      app.on("error", (err) => {
         console.log("error ", err);
         throw err
      })
      
      app.listen(process.env.PORT, () => {
         console.log(`App listening on port localhost:${process.env.PORT}`);
      })
   } catch (err) {
      console.log("error: ", err);
      throw err
   }
})()

*******/
