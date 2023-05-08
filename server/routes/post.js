const express  = require('express');
const Post = require('../models/post');
const Postrouter = express.Router();

Postrouter
    .post('/', async (req, res) =>{
    try{
        const posts = await Post.getPost(req.body);
        res.send(posts);
    } catch(err){
        res.status(401).send({message: err.message});
    }
})

    .post('/create', async (req, res) => {
        try{
            let post = await Post.createPost(req.body);
            res.send({...post});
        } catch(err){
            res.status(401).send({message: err.message});
        }
    })

    .put('/edit', async (req, res) => {
        try {
          let post = await Post.editPost(req.body);
          res.send({...post});
        } catch(err) {
          res.status(401).send({message: err.message})
        }
      })
    
      .delete('/delete', async (req, res) => {
        try {
          Post.deletePost(req.body);
          res.send({success: "We'll Miss You... :("})
        } catch(err) {
          res.status(401).send({message: err.message})
        }
      })

module.exports = Postrouter;