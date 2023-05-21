const process = require("process");

const express = require("express");
const cors = require("cors");
const methodOverride = require("method-override");
require('dotenv').config();

// Routes
const [ 
    userRouter, 
    productRouter, 
    orderRouter, 
    categoryRouter
] = require("./routes");

const app = express();

const PORT = process.env.PORT || 3000;

// Middlewares FORMULARIOS
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(methodOverride("_method"));
app.use(cors()); // aca se pueden restringir las solicitades a una direccion especifica, permitiendo solo las solicitudes de origen cruzado

// Routes
app.use(`/api/users`, userRouter);
app.use(`/api/products`, productRouter);
app.use(`/api/orders`, orderRouter);
app.use(`/api/categories`, categoryRouter);

// Errors
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => console.log(`Server listen in port ${PORT}`));