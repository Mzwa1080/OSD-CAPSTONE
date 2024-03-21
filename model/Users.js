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
        result,
      });
    });
  }

  async registerUser(req, res) {
    let data = req.body;
    data.password = await hash(data?.password, 10);
    let img_url_users = req.file ? req.file.img_url_users : null;
    let user = {
        email: data.email,
        password: data.password,
        img_url_users: img_url_users
    };
      const qry = `
      INSERT INTO users
      SET ?;
    `;
    db.query(qry, [data], (err) => {
      if (err) {
        res.json({
          status: res.statusCode,
          msg: "Already exists. Please use another email address",
        });
      } else {
        // Create token and send response
        let token = createToken(user);
        res.json({
          status: res.statusCode,
          token,
          msg: "You're registered",
        });
      }
    });
  }
  


   deleteUser(userId) {
      const qry = `DELETE FROM users WHERE user_id=${userId}`;
      db.query(qry, [userId], (err) => {
        if (err) {
          console.error(err);
        }
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
