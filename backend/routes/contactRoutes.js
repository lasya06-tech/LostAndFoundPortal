
const contact=require('../controllers/contactController');
const express=require('express');
const router=express.Router();

router.post('/send',contact.sendMessage);

module.exports=router;