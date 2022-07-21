const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const router = express.Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const password = req.body.password;
  const hashedPassword = await bcrypt.hash(password, 10);
  const userData = new User({ name: req.body.name, password: hashedPassword });
  try {
    const savedUserData = await userData.save();
    res.status(201).json({ message: "Created" });
  } catch (error) {
    res.json({ error: error });
  }
});

router.post("/login",  (req, res) => {
  if (!req.body.name || !req.body.password) {
    return res.status(400).json({ message: "Name and Password are required" });

  }
  const foundName =  User.find({name:req.body.name},(err, res)=>{
    console.log("res",res.name,"erro", err)
  })
  console.log( foundName)
});

router.get("/", async (req, res) => {
  try {
    const posts = await User.find();
    res.status(200).json(posts);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
