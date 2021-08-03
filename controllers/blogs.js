const express = require('express')
const blogRouter = require('express').Router()
const Blog = require('../models/Blog')

blogRouter.get('/api/blogs', (req, res) => {
  Blog
    .find({})
    .then(blogs => {
      res.json(blogs)
    })
})

blogRouter.post('/api/blogs', (req, res) => {
  const blog = new Blog(request.body)

  blog
    .save()
    .then(result => {
      res.status(201).json(result)
    })
})


module.exports = blogRouter;