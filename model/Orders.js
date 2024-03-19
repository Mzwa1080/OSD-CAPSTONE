import { connection as db } from "../config/index.js";
import { hash, compare } from "bcrypt";
import { createToken } from "../middleware/AuthenticateUser.js";

class Orders {

  fetchAllOrders(req, res) {
    const qry = `
      SELECT requested_services.rs_id, requested_services.user_id, requested_services.sp_id, requested_services.service_requested, requested_services.request_date,
      users.first_name AS user_first_name, users.address AS user_add,
      service_providers.company_name AS sp_comp_name, service_providers.first_name AS sp_name,  service_providers.address AS sp_address, 
      service_providers.service AS sp_service, service_providers.service_amount AS sp_amount, service_providers.phone_number AS sp_phonenumber
      FROM requested_services 
      INNER JOIN users ON requested_services.user_id = users.user_id
      INNER JOIN service_providers  ON requested_services.sp_id = service_providers.sp_id;
    `;
  
    db.query(qry, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }

  async addingOrders(req, res) {
    //payload
    let data = req.body;
    const qry = `
    INSERT INTO requested_services
    SET ?;`;

    db.query(qry, [data], (err, result) => {

      // console.log(data);
      if (err) throw err;
      //  else {
          res.json({
          status: res.statusCode,
          msg: "Added the order",
          result
        });
      // }
    });
  }


  fetchOrders(req, res) {
    const userId = req.params.id;
    const qry = `
      SELECT requested_services.rs_id, requested_services.user_id, requested_services.sp_id, requested_services.service_requested, requested_services.request_date,
      users.first_name AS user_first_name, users.address AS user_add,
      service_providers.company_name AS sp_comp_name, service_providers.first_name AS sp_name,  service_providers.address AS sp_address, 
      service_providers.service AS sp_service, service_providers.service_amount AS sp_amount, service_providers.phone_number AS sp_phonenumber
      FROM requested_services 
      INNER JOIN users ON requested_services.user_id = users.user_id
      INNER JOIN service_providers  ON requested_services.sp_id = service_providers.sp_id
      WHERE requested_services.user_id = ${userId};
    `;
  
    db.query(qry, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }


  deleteCompletetely(req, res) {
    console.log(req.params.id);
    const qry = `DELETE FROM requested_services WHERE user_id=${req.params.id} ;`;
    // const user = req.body

    db.query(qry, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Users are deleted!",
      });
    });
  }
  
  


  // query that allow user to book/select a service provider and get the users_firstName, address, phone_number and the service provider data/selected columns of a selected service provider ... Add/joing them in one row of a new table called requested_services 
 

  // deleteUser(req, res) {
  //   const qry = `DELETE FROM users WHERE userID=${req.params.id} ;`;
  //   // const user = req.body

  //   db.query(qry, (err) => {
  //     if (err) throw err;
  //     res.json({
  //       status: res.statusCode,
  //       msg: "Users are deleted!",
  //     });
  //   });
  // }

  // async updateUser(req, res) {
  //   let data = req.body;
  //   if (data?.userPwd) {
  //     data.userPwd = await hash(data?.userPwd, 8);
  //   }
  //   const qry = `
  // UPDATE users 
  // SET ?
  // WHERE userID = ${req.params.id};`;

  //   db.query(qry, [data], (err) => {
  //     if (err) throw err;

  //     res.json({
  //       status: res.statusCode,
  //       msg: "User updated!",
  //     });
  //   });
  // }


}
export { Orders };
