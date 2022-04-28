const { urlencoded } = require("body-parser")
const express = require("express")
const app = express()
const db = require("./db/db")
const router = require("./router/userRouter")
const port = 5000
//To run api first add db link in db.js file in db folder
//To create data run createData API
//Then run listData API
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use("/", router)

app.listen(port, () => {
    console.log(`server are running and port number ${port}`);
})

