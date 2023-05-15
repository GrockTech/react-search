//  const express = require('express')
 import express from 'express'
//  const cors = require('cors')
import cors from 'cors'
import { Users} from './Users.js'
   
 const app = express()


 app.use(cors())
 
app.get('/', (req, res)=>{

     const {q} = req.query
     if(!q){
          console.log(`there is no ${q}`)
     }
     console.log(q)
     
res.json(Users)   /// splice to show 10 data
})
  app.listen(8800, ()=>{
       console.log("sever is running")
  })

// import express from 'express'
// import cors from 'cors'
// import { Users} from './Users.js'
   
// const app = express()

// app.use(cors())

// let s; // declare s at the module level

// app.get('/', (req, res)=>{
//   s = req.query.s; // assign the value of s from the query parameter
//   console.log(s);
//   res.json(Users);
// });

// app.listen(8800, ()=>{
//   console.log("server is running");
//   console.log(s); // s is accessible here because it was declared at the module level
// });
