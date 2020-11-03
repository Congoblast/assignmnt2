const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const db = require("./db")
const router = require("./routes")

const app = express()
const apiPort = 3000

const PORT = process.env.PORT || 3000

const mongoose = require("mongoose")


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/database", { 
    useNewUrlParser: true,
useUnifiedTopology: true 
});

 

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on("error", console.error.bind(console, "connection:"))


app.use("/api", router)

if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

app.listen(apiPort, () => console.log(`running on port ${apiPort}`))

