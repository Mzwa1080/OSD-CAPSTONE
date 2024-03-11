import { Users } from "./Users.js";
import { ServiceProviders } from "./ServiceProviders.js";
import { Orders } from "./Orders.js";
//create objects
let users=new Users()
let serviceProvider = new ServiceProviders()
let orders = new Orders()
export{
    users,
    serviceProvider,
    orders
}