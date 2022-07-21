const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// post
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

// read all
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.json({ message: error });
  }
});

// read one
router.get("/:postID", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postID);
    res.status(200).json(post);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

// delete
router.delete("/:postID", async (req, res) => {
  try {
    const post = await Post.deleteOne({ _id: req.params.postID });
    res.status(200).json(post);
  } catch (error) {
    res.json({
      error: error,
    });
  }
});

// update

router.patch("/:postID", async (req, res) => {
  try {
    const postUpdate = await Post.updateOne(
      { _id: req.params.postID },
      { ...req.body }
    );
    res.json(postUpdate);
  } catch (error) {
    res.json({
      error: error,
    });
  }
});

module.exports = router;
