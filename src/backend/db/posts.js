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
      likeCount: 14,
      likedBy: [],
      dislikedBy: [],
    },
    username: "amandeep_sinha",
    comments: [
      {
        _id: uuid(),
        username: "ayush_raj",
        text: "Nice! 👍",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },}],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Practce makes a man perfect, so we should never stop practicing  PS :) By Practicing you can Master any Skills",
    likes: {
      likeCount: 16,
      likedBy: [],
      dislikedBy: [],
    },
    username: "ayush_raj",
    comments: [
      {
        _id: uuid(),
        username: "anjali_shrestha",
        text: "Amazing lines 👏👏",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },}],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Its not an overnight Success...........There are thousands of sleepless night behind this.",
    likes: {
      likeCount: 29,
      likedBy: [],
      dislikedBy: [],
    },
    username: "anjali_shrestha",
    comments: [
      {
        _id: uuid(),
        username: "amandeep_sinha",
        text: "Quite Relatable lines....",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },}],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "Need a roomie for a 2BHK in WhiteField Banglore",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    username: "rohita_reddy",
    comments: [
      {
        _id: uuid(),
        username: "anshika_singh",
        text: "Interested 🤚🤚 @rohita_reddy",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },}],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "one day at Microsoft to First day at Microsoft",
    likes: {
      likeCount: 20,
      likedBy: [],
      dislikedBy: [],
    },
    username: "anshika_singh",
    comments: [
      {
        _id: uuid(),
        username: "amandeep_sinha",
        text: "Best of luck for the journey ahead",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },}],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
