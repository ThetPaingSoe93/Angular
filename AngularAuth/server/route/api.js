const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const db ="mongodb+srv://thet:<thet>@eventdb.dzakf9f.mongodb.net/test"

mongoose.connect(db,err =>{
    if(err) {
        console.error('Error!' + err)
    }

    else {
        console.log('Connected to mongodb')
    }
})
router.get('/',(req,res)=>{
    res.send('From API route')
})

module.exports = router