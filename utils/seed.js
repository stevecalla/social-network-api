const connection = require('../config/connection');
const { User, Thought, Application } = require('../models');
const { getRandomUserName, getRandomThought, getRandomApplications } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await User.deleteMany({});
  await Thought.deleteMany({});
  await Application.deleteMany({});

  const users = [];
  const thoughtsData = [];
  const applications = getRandomApplications(10);

  //create thought seeds
  let userNames = [];

  for (let i = 0; i < 5; i++) {
    const userName = getRandomUserName().toLowerCase();
    const thoughtsText = getRandomThought();
    
    thoughtsData.push({
      thoughtsText,
      userName,
    })
    
    userNames.push(userName);
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
      userName
      ,email
      ,thoughts
      ,friends
    });
  }

  // await Application.collection.insertMany(applications);
  // console.log(users, thoughts)

  await User.collection.insertMany(users)
  console.log('1 = --------', users)
  await User.deleteMany({})
  .then(() => {
    for (let j = 0; j < 5; j++) {
      let friends = users[4-j]._id;
  
      users[j].friends.push(friends);
    }
  })
  console.log('2 = --------', users)
  await User.collection.insertMany(users)


  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.table(thoughtsData);
  console.table(users);

  // console.table(applications);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
