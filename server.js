const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const dotenv = require('dotenv');

var corsOptions = {
    // origin: "https://jobsearchapp.netlify.app/"
    origin: "http://localhost:8080"
}

app.use(cors(corsOptions));

app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models/index");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connect to the database successfully.");
    })
    .catch(error => {
        console.log("Cannot connect to the database.\n", error);
        process.exit();
    });

const routes = require("./routes/jobRoute");
app.use(routes);

dotenv.config();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})