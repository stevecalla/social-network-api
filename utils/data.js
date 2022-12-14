const names = [
  "Aaran",
  "Aaren",
  "Aarez",
  "Aarman",
  "Aaron",
  "Aaron-James",
  "Aarron",
  "Aaryan",
  "Aaryn",
  "Aayan",
  "Aazaan",
  "Abaan",
  "Abbas",
  "Abdallah",
  "Abdalroof",
  "Abdihakim",
  "Abdirahman",
  "Abdisalam",
  "Abdul",
  "Abdul-Aziz",
  "Abdulbasir",
  "Abdulkadir",
  "Abdulkarem",
  "Smith",
  "Jones",
  "Coollastname",
  "Ze",
  "Zechariah",
  "Zeek",
  "Zeeshan",
  "Zeid",
  "Zein",
  "Zen",
  "Zendel",
  "Zenith",
  "Zennon",
  "Zeph",
  "Zerah",
  "Zhen",
  "Zhi",
  "Zhong",
  "Zhuo",
  "Zi",
  "Zidane",
  "Zijie",
  "Zinedine",
  "Zion",
  "Zishan",
  "Ziya",
  "Ziyaan",
  "Zohaib",
  "Zohair",
  "Zoubaeir",
  "Zubair",
  "Zubayr",
  "Zuriel",
  "Xander",
  "Jared",
  "Grace",
  "Alex",
  "Mark",
  "Tamar",
  "Farish",
  "Sarah",
  "Nathaniel",
  "Parker",
];

const thoughtData = [
  "thought_1",
  "thought_2",
  "thought_3",
  "thought_4",
  "thought_5",
  "thought_6",
  "thought_7",
  "thought_8",
  "thought_9",
  "thought_10",
];

const reactionData = [
  "reaction_1",
  "reaction_2",
  "reaction_3",
  "reaction_4",
  "reaction_5",
  "reaction_6",
  "reaction_7",
  "reaction_8",
  "reaction_9",
  "reaction_10",
];

const users = [];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random user name
const getRandomUserName = () =>
  `${getRandomArrItem(names)}${getRandomArrItem(names)}`;

// Gets a random thought
const getRandomThought = () => `${getRandomArrItem(thoughtData)}`;

// Gets a random reaction
const getRandomReaction = () => `${getRandomArrItem(reactionData)}`;

// Export the functions for use in seed.js
module.exports = {
  getRandomUserName,
  getRandomThought,
  getRandomReaction,
};
