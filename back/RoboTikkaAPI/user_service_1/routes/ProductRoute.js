const express=require('express');

const productController=require('../controller/productController');

const router=express.Router();

router.post('/saveproduct',productController.saveProduct);
router.get('/getAllProduct',productController.getAllProducts());
module.exports=router;