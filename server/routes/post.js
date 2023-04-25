const express = require('express')
const User = require('../models/post')
const router = express.Router()

router.get('/test', async (req, res) => {
  try {
    const posts = await User.getAllPosts();
    res.send(posts); 
  } catch(err) {
    res.status(401).send({message: err})
  }
})

module.exports = router;