import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  
  {
    _id: uuid(),
    firstName: "Anjali",
    lastName: "shrestha",
    username: "anjali_shrestha",
    password: "Abc@123",
    profilepic: "https://res.cloudinary.com/mittar/image/upload/v1657269299/Mittar_assets/pic3_ebzlmt.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Amandeep",
    lastName: "Sinha",
    username: "amandeep_sinha",
    password: "Abc@123",
    profilepic: "https://res.cloudinary.com/mittar/image/upload/v1657223520/Mittar_assets/programmer_xb2gvj.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Ayush",
    lastName: "Raj",
    username: "ayush_raj",
    password: "Abc@123",
    profilepic: "https://res.cloudinary.com/mittar/image/upload/v1657223519/Mittar_assets/man_qe7irt.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  }
];
