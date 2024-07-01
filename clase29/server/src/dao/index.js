import {UsersMongo} from "./managers/user.mongo.js"
import {OrdersMongo} from "./managers/orders.mongo.js"
import { BusinesesMongo } from "./managers/business.mongo.js"
import { connectDB } from "../config/dbConnections.js"

connectDB();
export const userDao = new UsersMongo() 
export const orderDao = new OrdersMongo()
export const businesesDao = new BusinesesMongo()
