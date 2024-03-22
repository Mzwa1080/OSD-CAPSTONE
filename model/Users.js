import { connection as db } from "../config/index.js";
import { hash, compare } from "bcrypt";
import { createToken } from "../middleware/AuthenticateUser.js";
class Users {

  fetchUsers(req, res) {
    const qry = `
    SELECT user_id,first_name,last_name, userRole, email, address , password, img_url_users
    FROM users;  `;

    db.query(qry, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }

  fetchUser(req, res) {
    const qry = `
    SELECT user_id,first_name,last_name, userRole, email, address , img_url_users, password
    FROM users WHERE user_id=${req.params.id} `;

    db.query(qry, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result : result[0]
      });
    });
  }

  async registerUser(req, res) {
    //payload
    let data = req.body;
    data.password = await hash(data?.password, 10);
    let user = {
      email: data.email,
      password: data.password,
    };
    const qry = `
    INSERT INTO users
    SET ?;
    `;
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

  deleteUser(req, res) {
    const qry = `DELETE FROM users WHERE user_id=${req.params.id} ;`;
    let dataID = req.params.id
    console.log(dataID);
    db.query(qry, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Service Provider is deleted!",
      });
    });
  }



  async updateUser(req, res) {
    let data = req.body;
    if (data?.password) {
      data.password = await hash(data?.password, 8);
    }
    const qry = `
  UPDATE users 
  SET ?
  WHERE user_id=${req.params.id};`;

    db.query(qry, [data], (err) => {
      if (err) throw err;

      res.json({
        status: res.statusCode,
        msg: `${data.first_name} is updated!`,
      });
    });
  }

  login(req, res) {
    const { email, password } = req.body;
    console.log(email);
    const qry = 
    `SELECT user_id,first_name,last_name, email, userRole, address , img_url_users, password
    FROM users WHERE email='${email}'`;

    db.query(qry, async (err, result) => {
      if (err) throw err;
      if (!result?.length) {
        res.json({
          status: res.statusCode,
          msg: "You provided a wrong email address",
        });
      } else {
        const validPass = await compare(password, result[0].password);
        if (validPass) {
          const token = createToken({
            email,
            password
          });
          res.json({
            status: res.statusCode,
            msg: "You logged in",
            token,
            result : result[0]
          });
        } else {
          res.json({
            status: res.statusCode,
            msg: "Please provide correct password",
            result,
          });
        }
      }
    });
  }
}
export { Users };
