const express = require('express')
const router = express.Router()
const MessageM = require('../models/MessageModel')
const youtubeModel = require('../models/myYoutubeLink')

const mongoose = require('mongoose')
const db = "mongodb+srv://tokay:cXvyH9hoEDnC3q0C@cluster0.qk28cyh.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(db,err => {
    if(err){
        console.log('Error!'+err)
    }else{
        console.log('Connected to mongodb')
    }
})
router.get('/', (req, res) => {
    res.send('From API route')
})

router.post('/sendMsg', (req, res)=>{
    let guestMsg = req.body
    let Message = new MessageM(guestMsg)
    Message.save((error, newMsg)=> {
        if(error){
            console.log(error)
        }else{
            res.status(200).send(newMsg)
        }
    })

})

router.post('/newLink', (req, res)=>{
    let urlink = req.body
    let myLink = new youtubeModel(urlink)
    myLink.save((error, newUrl)=>{
        if(error){
            console.log(error)
        }else{
            res.status(200).send(newUrl)
        }
    })
})

router.put("/newLink/:id", (req, res, next)=>{
    console.log('Update link');
    youtubeModel.findByIdAndUpdate(req.params.id,
      {
        $set: {youtubeUrl : req.body.youtubeUrl}
      },
      {
        new: true
      },
      function(err, updatedurl){
        if(err){
          res.send('Error updating url');
            }else{
              res.json(updatedurl);
              }
         }
    );
})

//get single url
router.get("/newLink/:id", (req, res, next) => {
    console.log('Get request for a single url');
    youtubeModel.findById(req.params.id)
    .exec(function(err, url){
        if(err){
        console.log("Error retreiving url");
        }else {
        res.json(url);
        }
    })
})




router.get('/getMessages', (req, res, next)=>{
    
        console.log('Get request for all videos');
        MessageM.find({})
        .exec(function(err, videos){
            if(err){
            console.log("Error retreiving videos");
            }else {
            res.json(videos);
            }
        })
    
})

module.exports = router