import express from "express"
import bodyParser from "body-parser";
import { orders } from "../model/index.js";
import { verifyToken } from "../middleware/AuthenticateUser.js";

const orderRouter=express.Router()

orderRouter.get('/',(req,res)=>{
    try{
        orders.fetchOrders(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to retrieve a user'
        })
    }
})

orderRouter.post('/add', bodyParser.json(),(req,res)=>{
    try{
        orders.addingOrders(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to add new user'
        })
    }
})

//fetch user

// orderRouter.patch('/update/:id', bodyParser.json(),(req,res)=>{
//     try{
//         users.updateUser(req,res)
//     }catch(e){
//         res.json({
//             status: res.statusCode,
//             msg: 'Update failed'
//         })
//     }
// })
// //add a user


// orderRouter.delete('/delete/:id',(req,res)=>{
//     try{
//         users.deleteUser(req,res)

//     }catch(e){

//         res.json({
//             status:res.statusCode,
//             msg:'failed to delete a user',
//         })
//     }
// })

// orderRouter.post('/login', (req,res)=>{
//     try{
//         users.login(req,res)
//     }catch(e){
//         res.json({
//             status : req.statusCode,
//             msg : 'failed to login'
//         })
//     }
// })

export{
    orderRouter,express
}