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
    fetchProvider(req,res){
        const qry =`
        SELECT sp_id,company_name,first_name, last_name, birth_date , address, service, service_amount, phone_number, created_date, active_column, img_url_sp
        FROM service_providers WHERE sp_id = ${req.params.id}
        `
        db.query(qry, (err, result) => {
            if (err) throw err;
            res.json({
              status: res.statusCode,
              result : result[0],
            });
          }); 
    }
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

  deleteProvider(req,res){
    const qry=`DELETE FROM service_providers WHERE sp_id=${req.params.id} ;`
    // const user = req.body
  
    db.query(qry, (err)=>{
  
      if(err) throw err
      res.json({
        status: res.statusCode,
        msg:'Service Provider is deleted!'
      })
  
    })
  }

  async updateProvider(req,res){
    const qry=` UPDATE service_providers SET ? WHERE sp_id=${req.params.id};`
  
    db.query(qry, [req.body], (err)=>{
      if(err) throw err
      res.json({
        status: res.statusCode,
        msg:'Service Provider is updated!'
      })
  
    })
  }

 
 }
 export{
  ServiceProviders
    
 }