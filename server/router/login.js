const express = require('express')
const router = express.Router()
const {signUpValidation,resetPassValidation} = require('../helper/validator')
const userController = require('../controller/login')
const userVerify = require('../controller/verify')
const warehouse = require('../controller/sensors')

// User Section
router.post('/signup',signUpValidation,userController.signup)
router.post('/login',userController.login)
router.get('/user',userController.user)
router.post('/users',userController.users)
router.patch('/editprofile',userController.userUpdate)
router.post('/authen',userController.authen)
router.post('/resetpass',resetPassValidation,userController.resetPass)
router.post('/verifyuser', userVerify.verifyemail)
router.post('/verifyresetpass',userVerify.verifyResetPass)
router.post('/forget',userController.forget)
router.post('/profile',userController.profile)

//query Section
router.get('/warehouseFlow',warehouse.flow)
router.get('/warehouseAll',warehouse.allData)

module.exports=router