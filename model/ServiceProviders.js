 import {connection as db} from "../config/index.js"
 import { hash, compare } from "bcrypt";
import { createToken } from "../middleware/AuthenticateUser.js";

 class ServiceProviders{

    fetchSP(req,res){
        const qry =`
        SELECT sp_id,company_name,first_name, last_name, birth_date , address, service, service_amount, phone_number, created_date, active_column, img_url_sp, email, password
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

    async registerServiceProvider(req, res) {
      //payload
      let data = req.body;

      console.log(data.password);
      data.password= await hash(data?.password, 8);
      let user = {
        email: data.email,
        password: data.password
      };
      const qry = `
        INSERT INTO service_providers SET ?;`

      db.query(qry, [data], (err) => {
        if (err) {
          res.json({
            status: res.statusCode,
            msg: "already exists.please use another email address",
          });
        } else {
          //create token
          let token = createToken(user);
          res.json({
            status: res.statusCode,
            token,
            msg: "You're registered",
          });
        }
      });
    }
    login(req,res){
      const{email,password}=req.body
      const qry=`
      SELECT sp_id,company_name,first_name, last_name, birth_date , address, service, service_amount, phone_number, created_date, active_column, img_url_sp, email, password
      FROM service_providers WHERE email='${email}';`
      db.query(qry, async(err,result) => {
        if (err) throw err

        if(!result?.length){
          res.json({
            status: res.statusCode,
            msg:"wrong email provided"
          });
        }else{
         //validate pswd
         const validPass = await compare(password, result[0].password);
            if (validPass) {
              const token = createToken({
                email,
                password,
              });
              res.json({
                status: res.statusCode,
                msg: "You're logged in.",
                token,
                result: result[0],
              });
            } else {
              res.json({
                status: res.statusCode,
                msg: " Please provide the correct password.",
              });
        }}})
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