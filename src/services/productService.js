const { Product } = require("../database/models");

const getProducts = async () => {
    try {
        const products = await Product.findAll({
            include: [
                { association: /* TE LO DEJO HASTA ACA...*/},
            ]
        })
    }
};