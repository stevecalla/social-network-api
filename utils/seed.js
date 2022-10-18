const connection = require("../config/connection");
const { User, Thought } = require("../models");
const {
  getRandomUserName,
  getRandomThought,
  getRandomReaction,
} = require("./data");
const { Types } = require("mongoose");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
  await User.deleteMany({});
  await Thought.deleteMany({});

  const users = [];
  const thoughtsData = [];

  // create userNames seeds
  let userNames = [];

  for (let i = 0; i < 5; i++) {
    let userName = getRandomUserName().toLowerCase();
    userNames.push(userName);
  }

  //create thought seeds
  let createdAt = new Date();

  for (let i = 0; i < 5; i++) {
    const thoughtsText = getRandomThought();
    let userName = userNames[i];
    // let createdAt = Date.now();
    const reactions = [
      {
        reactionBody: getRandomReaction(),
        userName: userNames[4 - i],
        _id: new Types.ObjectId(),
        reactionId: new Types.ObjectId(),
        createdAt: createdAt,
      },
    ];

    thoughtsData.push({
      thoughtsText,
      userName,
      createdAt,
      reactions,
    });
  }

  await Thought.collection.insertMany(thoughtsData);

  // create user seeds
  for (let j = 0; j < 5; j++) {
    const email = `${userNames[j]}@email.com`;
    let userName = userNames[j];
    let thoughts = [thoughtsData[j]._id];
    // let friends = [userNames[4-j]];
    let friends = [];

    users.push({
      userName,
      email,
      thoughts,
      friends,
      createdAt,
    });
  }

  await User.collection.insertMany(users);
  console.log("1 = --------", users);

  await User.deleteMany({}).then(() => {
    for (let j = 0; j < 5; j++) {
      let friends = users[4 - j]._id;

      users[j].friends.push(friends);
    }
  });
  console.log("2 = --------", users);
  await User.collection.insertMany(users);

  console.table(thoughtsData);
  console.table(users);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
