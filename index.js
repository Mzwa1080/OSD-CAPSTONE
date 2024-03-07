import { express, userRouter } from "./controllers/UserController.js";
import { spRouter } from "./controllers/ServiceProviderController.js";
// import {requestsRouter} from './controllers/OrderController.js'
import cookieParser from "cookie-parser";
import { errorHandling } from "./middleware/ErrorHandling.js";
import path from 'path'
import { config } from "dotenv";
import cors from 'cors'
config()

const app=express()
const port = +process.env.PORT || 4000

//Middleware
app.use((req,res,next)=>{
res.header("Access-Control-Allow-Origin","*")
res.header("Access-Control-Allow-Credentials","*")
res.header("Access-Control-Allow-Methods","*")
res.header("Access-Control-Request-Methods","*")
res.header("Access-Control-Allow-Headers","*")
res.header("Access-Control-Expose-Headers","*");
next();
}) 

app.use(
    express.static('./static'),
    express.json(),
    express.urlencoded({
        extended:true,
    }),
    cookieParser(),
    cors()
)
app.get('^/$|/osd',(req,res)=>{
res.status(200).sendFile(path.join(__dirname,'./static/index.html'))
})
// users
// app.use( '/users',userRouter)

// app.user('/requests', requestsRouter)

// Products 
app.use('/service-providers',spRouter)


app.use(errorHandling)
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})