const express = require("express")
const router= express.Router()
const models = require("../models")

router.get("/", function(req,res){
  models.Todolist.findAll().then(function(todos){
    res.render("index",{
      todos:todos
    })
  })
})

router.post("/", function(req,res){
  const todo= models.Todolist.build({
    task: req.body.todo
})
todo.save().then(function(newTodo){
  console.log(newTodo.id)
})
  res.redirect("/")
})

router.post("/completed", function(req,res){
  models.Todolist.destroy({
    where:{
      id: req.body.button
    }
  }).then(function(){
    res.redirect("/")
  })
})

module.exports = router
