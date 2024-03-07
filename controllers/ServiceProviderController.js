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
spRouter.get('/:id',(req,res)=>{
    try{
        serviceProvider.fetchProvider(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to retrieve a service provider'
        })
    }

})
spRouter.post('/add-service-provider',bodyParser.json(),(req,res)=>{
    try{
        serviceProvider.addServiceProvider(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to add service provider'
        })
    }
})


spRouter.delete('/delete/:id',(req,res)=>{
    try{
        serviceProvider.deleteProvider(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'Failed to delete a Service Provider',
        })
    }
})

spRouter.patch('/update/:id',(req,res)=>{
    try{
        serviceProvider.updateProvider(req,res)

    }catch(e){

        res.json({
            status:res.statusCode,
            msg:'Failed to update Service Provider',
        })
    }
})



export{
    spRouter
}


