// Models 
const Product = require("../models/product");
const Card = require("../models/card");


//functions
const get_All_Products = (req, res) => {
  Product.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { blogs: result, title: "All Products" });
    })
    .catch((err) => {
      console.log(err);
    });
};


// exports modules
module.exports = { get_All_Products, 
    get_Form_Add_Product,
    post_Product,
    view_A_Product,
    delete_A_Product,
    add_To_Card,
    post_myCard
    };