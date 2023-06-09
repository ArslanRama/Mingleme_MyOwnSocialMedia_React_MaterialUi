import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];


export const users = [
  
  {
    _id: userIds[0],
    firstName: "Eren",
    lastName: "Yılmaz",
    email: "eren.yilmaz@example.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p1.jpeg",
    friends: [],
    location: "Istanbul, Turkey",
    occupation: "Marketing Manager",
    viewedProfile: 5489,
    impressions: 25521,
    createdAt: 1644212800,
    updatedAt: 1644212800,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Anna",
    lastName: "Schmidt",
    email: "anna.schmidt@example.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p2.jpeg",
    friends: [],
    location: "Leipzig, Germany",
    occupation: "Pharmacist",
    viewedProfile: 876,
    impressions: 4398,
    createdAt: 1644212800,
    updatedAt: 1644212800,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "Max",
    lastName: "Mustermann",
    email: "max.mustermann@example.com",
    password: "$2b$10$sadgsag//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p1.jpeg",
    friends: [],
    location: "Hamburg, Germany",
    occupation: "Software Engineer",
    viewedProfile: 245,
    impressions: 7643,
    createdAt: 1644212800,
    updatedAt: 1644212800,
    __v: 0,
  },
  {
    _id: userIds[3],
    firstName: "Lisa",
    lastName: "Schulz",
    email: "lisa.schulz@example.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p2.jpeg",
    friends: [],
    location: "Hamburg, Germany",
    occupation: "Graphic Designer",
    viewedProfile: 876,
    impressions: 4398,
    createdAt: 1644212800,
    updatedAt: 1644212800,
    __v: 0,
  },
];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[0],
    firstName: "Eren",
    lastName: "Yılmaz",
    location: "Istanbul, Turkey",
    description: "Just another day in the beautiful city of Istanbul",
    picturePath: "post1.jpeg",
    userPicturePath: "p1.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[2], true],
      [userIds[3], true],
    ]),
    comments: [
      "Beautiful picture!",
      "Istanbul is on my travel bucket list!",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "Anna",
    lastName: "Schmidt",
    location: "Leipzig, Germany",
    description: "Enjoying a cup of coffee at my favorite spot in Leipzig!",
    picturePath: "post1.jpeg",
    userPicturePath: "p2.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[3], true],
    ]),
    comments: [
      "Looks cozy!",
      "I love your outfit!",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: users[2]._id,
    firstName: "Max",
    lastName: "Mustermann",
    location: "Hamburg, Germany",
    description: "Had a great time exploring the Elbphilharmonie!",
    picturePath: "post1.jpeg",
    userPicturePath: "p1.jpeg",
    likes: new Map([
      [users[1]._id, true],
      [users[2]._id, true],
    ]),
    comments: [
      "That's such a cool building!",
      "I've always wanted to visit there!",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: users[3]._id,
    firstName: "Lisa",
    lastName: "Schulz",
    location: "Hamburg, Germany",
    description: "Enjoying a sunny day at Planten un Blomen!",
    picturePath: "post2.jpeg",
    userPicturePath: "p2.jpeg",
    likes: new Map([
      [users[1]._id, true],
    ]),
    comments: [
      "Looks like a perfect day!",
      "I love that park!",
    ],
  },
];