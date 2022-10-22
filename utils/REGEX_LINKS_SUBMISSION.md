
999-999-0000

scalla@gmail.com

alexcool@email.com

^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$

^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,10})$


Video #1: Demonstrates how to start the application’s server and all of the technical acceptance criteria. This includes syncing with Mongo via Mongoose at server startup, seeding, models and schema as required, date formatting and more.

- Google Link https://drive.google.com/file/d/1XcBQHw02FYr_2mWprqGo-8wUBZNhZZwE/view

- Youtube Link: https://youtu.be/HNc61D-j4nI

Video #2: Demonstrates all `Users` routes including GET all, GET user by id, POST new user, PUT user update, and DELETE USER (and associated thoughts).

- Google Link: https://drive.google.com/file/d/1CBQeaZhphU6nUqzxZOlN1sqTx2MabCEy/view

- Youtube Link: https://youtu.be/rqdCeiGhVAI

Video #3: Demonstrates all `Friends` routes including create/POST a friend and DELETE a friend.

- Google Link: https://drive.google.com/file/d/16rXlrm4MZCT-ieCXx1SPMqOqbu73lY6t/view

- Youtube Link: https://youtu.be/rPL0nG73ECg

Video #4: Demonstrates all `Thoughts` routes including GET all, GET thought by id, POST new thought (and adds thought to related user thoughts array), PUT thought update, and DELETE thought (and remove thought from related user thoughts array).

- Google Link: https://drive.google.com/file/d/1TElK9TDk_UYz0cxETIfLGBUzK_9KxFmq/view

- Youtube Link: https://youtu.be/5udd7YO4f24

Video #5: Demonstrates all `Reactions` routes including create/POST a reaction and DELETE a reaction.

- Google Link: https://drive.google.com/file/d/1-gJW0kyBjILedQMK0nkD4FzCy4U0q4Ec/view

- Youtube Link: https://youtu.be/qBMw2xhaNkU

#### SUBMISSION
Hello - I'm happy to provide my submission for Project #18 Social Network API. See the links below, please. All videos below are less than 2 minutes.

- [ ] GitHub Repo: https://github.com/stevecalla/social-network-api
- [ ] Video #1: Start/Sync & Tech Criteria https://youtu.be/HNc61D-j4nI
- [ ] Video #2: User Routes https://youtu.be/rqdCeiGhVAI
- [ ] Video #3: Friend Routes https://youtu.be/rPL0nG73ECg
- [ ] Video #4: Thought Routes https://youtu.be/5udd7YO4f24
- [ ] Video #5: Reaction Routes https://youtu.be/qBMw2xhaNkU

To start/sync the server please use "npm start", "node index.js" or "nodemon" (if you have it installed globally). 

A seed is available by running "npm run seed".

The readme includes a thorough review of all API routes and features. The features include:

1. Email validation using "match" schema function
2. "Virtual" friends and reactions count
3. "Getter" method to format the time stamp using the native JavaScript `Date` object to format timestamps (`new Intl.DateTimeFormat('en-US', options).format(date)`). See `utils/helpers.js`
4. Sub/nest-document for the "reactionsSchema"
5. Self-reference join for the friends list/array
6. "Populate" (join) for the thoughts and friends list/array
7. **BONUS** "addReactions" controller ensures a reaction doesn't exist prior to insertion
8. **BONUS** "createThought" controller adds the thought._id to the user's associated thoughts array
9. **BONUS** "deleteThought" controller deletes the thought._id from the user's associated thoughts array
10. **BONUS** Robust seed code for all data

Thank you, Steve

## FEEDBACK
```
Amazing work on your Social Network API. I can see that you have an extremely detailed README, which includes screenshots, a hefty description, your video link, etc. I love your extremely descriptive README! I would recommend mending the videos (using a video editing software) together instead of submitting numerous videos. 

I can see that you have your videos showcasing the various endpoints including from users to reactions! However, I would advise to add some commentary into your walkthrough to provide some of your thoughts. With that being said, amazing work! - KN
```