import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "balika",
    username: "adarshbalika@gmail.com",
    password: "Abc@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Amandeep",
    lastName: "Sinha",
    username: "mramandeepsinha@gmail.com",
    password: "Abc@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  }
];
