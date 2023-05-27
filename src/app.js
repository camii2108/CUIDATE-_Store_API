const process = require("process");

const express = require("express");
const methodOverride = require("method-override");
require('dotenv').config();
const cors = require('cors')

// Routes
const [ 
    userRouter, 
    productRouter, 
    cartRouter, 
    categoryRouter
] = require("./routes");

const app = express();

const PORT = process.env.PORT || 3000;

// Middlewares FORMULARIOS
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(methodOverride("_method"));
app.use(cors());

// Routes
app.use(`/api/users`, userRouter);
app.use(`/api/products`, productRouter);
app.use(`/api/cart`, cartRouter);
app.use(`/api/categories`, categoryRouter);

// Errors
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => console.log(`Server listen in port ${PORT}`));