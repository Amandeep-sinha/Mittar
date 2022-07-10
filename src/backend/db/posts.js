import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "GoodMorning Guys !, Weather is like a heaven Today ",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    username: "amandeep_sinha",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Practce makes a man perfect, so we should never stop practicing  PS :) By Practicing you can Master any Skills",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "ayush_raj",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Its not an overnight Success...........There are thousands of sleepless night behind this.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "anjali_shrestha",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
