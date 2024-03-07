import express from 'express'
import bodyParser from 'body-parser'
import { serviceProvider } from '../model/index.js'

const spRouter=express.Router()

//fetch all products
spRouter.get('/',(req,res)=>{
    try{
        
        serviceProvider.fetchSP(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to retrieve a service provider'
        })
    }

})
// spRouter.get('/:id',(req,res)=>{
//     try{
//         ServiceProviders.fetchProduct(req,res)
//     }catch(e){
//         res.json({
//             status:res.statusCode,
//             msg:'failed to retrieve a product'
//         })
//     }

// })
spRouter.post('/addServiceProvider',bodyParser.json(),(req,res)=>{
    try{
        serviceProvider.addServiceProvider(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to add service provider'
        })
    }
})
// spRouter.delete('/deleteProducts',(req,res)=>{
//     try{
//         ServiceProviders.deleteProducts(req,res)

//     }catch(e){

//         res.json({
//             status:res.statusCode,
//             msg:'failed to delete a product',
//             // results:products.fetchProducts(req,res)
//         })
//     }
// })

// spRouter.delete('/delete/:id',(req,res)=>{
//     try{
//         ServiceProviders.deleteProduct(req,res)

//     }catch(e){

//         res.json({
//             status:res.statusCode,
//             msg:'failed to delete a user',
//         })
//     }
// })

// spRouter.patch('/update/:id',(req,res)=>{
//     try{
//         ServiceProviders.updateProduct(req,res)

//     }catch(e){

//         res.json({
//             status:res.statusCode,
//             msg:'failed to update a user',
//         })
//     }
// })

// spRouter.delete('/delete/:id',(req,res)=>{
//     try{
//         ServiceProviders.deleteProduct(req,res)

//     }catch(e){

//         res.json({
//             status:res.statusCode,
//             msg:'failed to delete a product',
//             // results:products.fetchProducts(req,res)
//         })
//     }
// })

// spRouter.patch('/update/:id',(req,res)=>{
//     try{
//         ServiceProviders.updateProduct(req,res)

//     }catch(e){

//         res.json({
//             status:res.statusCode,
//             msg:'failed to update a product',
//             // results:products.fetchProducts(req,res)
//         })
//     }
// })

export{
    spRouter
}


