const express = require("express")
require("dotenv").config()
const connect = require("./src/configs/db")
const app = express()
const groceryController = require("./src/controllers/groceries.controller")
const restaurantController = require("./src/controllers/restaurants.controller")
const fruitController = require("./src/controllers/fruits.controller")
const vegetableController = require("./src/controllers/vegetable.controller")



app.use(express.json())

app.use("/groceries",groceryController)
app.use("/restaurants",restaurantController)
app.use("/fruits",fruitController)
app.use("/vegetables",vegetableController)

app.listen(5000,async()=>{
    try{
        await connect()
        console.log("Listening on port 5000")
    }catch(err){
        console.log(err.message)
    }
})