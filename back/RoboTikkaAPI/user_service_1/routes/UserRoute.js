const express=require('express');

const userController=require('../controller/UserController');

const router=express.Router();

router.post('/registerUser',userController.registerUser);
router.get('/login',userController.login);
module.exports=router;