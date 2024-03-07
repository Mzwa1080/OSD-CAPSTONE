 import {connection as db} from "../config/index.js"
 class ServiceProviders{

    fetchSP(req,res){
        const qry =`
        SELECT sp_id,company_name,first_name, last_name, birth_date , address, service, service_amount, phone_number, created_date, active_column, img_url_sp
        FROM service_providers;  `
        db.query(qry, (err, results) => {
            if (err) throw err;
            res.json({
              status: res.statusCode,
              results,
            });
          }); 
    }
  //   fetchProduct(req,res){
  //       const qry =`
  //       SELECT prodID,prodName,prodQuantity, productAmount,userID
  //       FROM products WHERE prodID = ${req.params.id}
  //       `
  //       db.query(qry, (err, result) => {
  //           if (err) throw err;
  //           res.json({
  //             status: res.statusCode,
  //             result : result[0],
  //           });
  //         }); 
  //   }
    addServiceProvider(req,res){
        const qry=` INSERT INTO service_providers SET ?;`
        let data = req.body
        db.query(qry,[data], (err)=>{
          if(err) throw err
          res.json({
            status: res.statusCode,
            msg:'new product was added'
          })


        })
    }
  //   deleteProducts(req,res){
  //     const qry=`DELETE FROM products ;`

  //     db.query(qry, (err)=>{
  //       if(err) throw err
        
  //       res.json({
  //         status: res.statusCode,
  //         msg:'Product was delete!'
  //       })

  //     })
  // }
  // deleteProduct(req,res){
  //   const qry=`DELETE FROM products WHERE prodID=${req.params.id} ;`
  //   // const user = req.body
  
  //   db.query(qry, (err)=>{
  
  //     if(err) throw err
  //     res.json({
  //       status: res.statusCode,
  //       msg:'Product is deleted!'
  //     })
  
  //   })
  // }
  // async updateProduct(req,res){
  //   const qry=`
  //   UPDATE products 
  //   SET ?
  //   WHERE prodID = ${req.params.id};`
  
  //   db.query(qry, [req.body], (err)=>{
  //     if(err) throw err
      
  //     res.json({
  //       status: res.statusCode,
  //       msg:'Product is updated!'
  //     })
  
  //   })
  // }

 
 }
 export{
  ServiceProviders
    
 }