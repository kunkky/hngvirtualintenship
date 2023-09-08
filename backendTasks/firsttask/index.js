const express = require("express");
const path = require("path");
const app = express();
const dotenv = require("dotenv");
const cors = require('cors');
const { taskRoutes } = require("./routes/taskRoutes");

//handle cors
app.use(cors(
    corsOptions = {
        origin: ['http://localhost:3000',"https://justbuy.onrender.com"], // Change to your React app's origin 
        credentials: true,
    }
));
app.use("/api/v1/", taskRoutes);


//create my server
dotenv.config()
dotenv.config({ path: "config.env" })
let PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Your App Works on PORT ${PORT}`);
})

