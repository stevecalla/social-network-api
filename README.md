# SOCIAL NETWORK API
[![License:  MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Index

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Features](#features)
5. [Contributing](#contributing)
6. [Resources](#resources)
7. [License](#license)

## Description

```
This app is a social network API that allows users to share their thoughts, react to friends’ thoughts, and create a friend list. This app uses the following technology:

* Express - server
* Mongo - "local" database 
* Mongoose 
```

## Acceptance Criteria

```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Installation

Setup: 
- (1) Fork the repo, (2) Clone the forked repo locally, (3) Run "npm install" (to install the dependencies).

Setup the Database Schema / Run Server: 
- Note that Mongo needs to be used for the database. The config file is setup to run on "mongodb://localhost/socialNetwork".
- Run Server: From the root directory, run either "npm start" or if nodemon is available "nodemon" to start nodeman or "node index.js".

Seed the Database: 
- Run "npm run seed" from the root directory. This should create a Mongo "socialNetwork" db.

## Usage

This app is a deployed solely on the back-end using Node.js, Express, Mongo, Mongoose and Insomia (for the API route testing).

## Features

This app includes a variety of API routes (see list below). In addition, the following features exist.

1. Email validation using "match" schema function
2. "Virtual" friends and reactions count
3. "Getter" method to format the time stamp using the native JavaScript `Date` object to format timestamps (`new Intl.DateTimeFormat('en-US', options).format(date)`). See `utils/helpers.js`
4. Sub/nest-document for the "reactionsSchema"
5. Self-reference join for the friends list/array
6. "Populate" (join) for the thoughts and friends list/array
7. "addReactions" controller ensures a reaction doesn't exist prior to insertion
8. **BONUS** "createThought" controller adds the thought._id to the user's associated thoughts array
9. **BONUS** "deleteThought" controller deletes the thought._id from the user's associated thoughts array
10. **BONUS** Robust seed code for all data

## API Routes

**`/api/users`** 

<details>

* All users 
  <br>- **METHOD** `GET` **PATH** `/api/users`

* A single user by `_id` with populated thought & friend data
  <br>- **METHOD** `GET` **PATH** `/api/users/634df22d4104c107dd4f42c8`
  <br>- Replace `id` params with current data

* Create new user
  <br>- **METHOD** `POST` **PATH** `/api/users`
  <br>- Optionally include `thoughts` or `friends` array of ids

    ```json
    // example data
    {
      "userName": "lernantino",
      "email": "lernantino@gmail.com"
    }
    ```

* Update a user by `_id`
  <br>- **METHOD** `PUT` **PATH** `/api/users/634d47030d72bb9ffea4d595`
  <br>- Update for `userName`, `email`

    ```json
    // example data
    {
      "userName": "lernantino_update2",
      "email": "lernantino_update2@gmail.com"
    }
    ```
* Remove/delete user by `_id`
  <br>- **METHOD** `DELETE` **PATH** `/api/users/634d47030d72bb9ffea4d595`
  <br>- Also deletes user's associated thoughts

</details>

---

**`/api/users/:userId/friends/:friendId`**

<details>

* Add a new friend to a user's friend list
  <br>- **METHOD** `POST` **PATH** `/api/users/634e1b87461a6c76046df4e9/friend/634e1b87461a6c76046df4ea`
  <br>- Replace `id` params with current data

* Remove/delete a friend from a user's friend list
  <br>- **METHOD** `DELETE` **PATH** `/api/users/634e1b87461a6c76046df4e9/friend/634e1b87461a6c76046df4ea`

</details>

---

**`/api/thoughts`**

<details>

* All Thougths
  <br>- **METHOD** `GET` **PATH** `/api/thoughts`

* `GET` to get a single thought by `_id`
* A single though by `_id`
  <br>- **METHOD** `GET` **PATH** `/api/thoughts/634d70298fa00f9e18a5a973`
  <br>- Replace `id` params with current data

* Create new thought
  <br>- **METHOD** `POST` **PATH** `/api/thoughts`
  <br>- Also push ($addToSet) the thought `_id' to the related user `thoughts` array
  <br>- Optionally add `reactions`

```json
// example data
{
  "userName": "abdirahmanaaryan",
  "thoughtsText": "post post post post",
  "reactions": [
    {
      "reactionBody": "reaction reaction reaction",
      "userName": "abdulkaremabdulbasir"
    }
  ]
}
```

* Update a thought by `_id`
  <br>- **METHOD** `PUT` **PATH** `/api/thoughts/634d70298fa00f9e18a5a973`
  <br>- Update for `thoughtsText`, `userName`, and/or `reactions` array
  <br>- Also push ($addToSet) the thought `_id' to the related user `thoughts` array

    ```json
    // example data
    {
      "thoughtsText": "thought_6001",
      "userName": "zohaibabdihakim",
      "reactions": [],
    }
    ```
* Remove/delete thought by `_id`
  <br>- **METHOD** `DELETE` **PATH** `/api/thoughts/634d70298fa00f9e18a5a973`
  <br>- Deletes associated sub-document reactions
  <br>- Also remove ($pull) the thought `_id' from the related user `thoughts` array

</details>

---

**`/api/thoughts/:thoughtId/reactions`**

<details>

* Add a reaction to a single thought's `reactions` array field
  <br>- **METHOD** `POST` **PATH** `localhost:3001/api/thoughts/634ec10b755357bb3b64b3c9/reactions`

    ```json
    // example data
    {
      "reactionBody": "new_reaction_100",
      "userName": "abdallahaaryn"
    }
    ```

* `DELETE` to pull and remove a reaction by the reaction's `reactionId` value

* Pull/remove a reaction by the reaction's `reactionId` value
  <br>- **METHOD** `DELETE` **PATH** `/api/thoughts/634e2eabb70caaf8fbb382c5/reactions`

    ```json
    // example data
    {
      "reactionId": "634e2eabb70caaf8fbb382bb"
    }
    ```

</details>

---


## App Preview - WalkThrough Videos

Video #1: Demonstrates how to start the application’s server and all of the technical acceptance criteria. This includes syncing with Mongo via Mongoose at server startup, seeding, models and schema as required, date formatting and more.

[Link to Start/Sync/Tech Criteria](https://youtu.be/HNc61D-j4nI)

![In Insomnia... TBD.](assets/1_video_start_tech_req.gif)

Video #2: Demonstrates all `User` routes including GET all, GET user by id, POST new user, PUT user update, and DELETE USER (and associated thoughts).

[Link to User Routes](https://youtu.be/rqdCeiGhVAI)

![In Insomnia... TBD.](assets/2_video_users_routes.gif)

Video #3: Demonstrates all `Friends` routes including create/POST a friend and DELETE a friend.

[Link to Friend Routes](https://youtu.be/rPL0nG73ECg)

![In Insomnia... TBD.](assets/3_video_friends_routes.gif)

Video #4: Demonstrates all `Thoughts` routes including GET all, GET thought by id, POST new thought (and adds thought to related user thoughts array), PUT thought update, and DELETE thought (and remove thought from related user thoughts array).

[Link to Thought Routes](https://youtu.be/5udd7YO4f24)

![In Insomnia... TBD.](assets/4_video_thoughts_routes.gif)

Video #5: Demonstrates all `Reactions` routes including create/POST a reaction and DELETE a reaction.

[Link to Reactions Routes](https://youtu.be/qBMw2xhaNkU)

![In Insomnia... TBD.](assets/5_video_reactions_routes.gif)

## Tests

No tests at this time.

## Contributing

Contributor Covenant Code of Conduct

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md)

## Resources

1. Project Manager: [Steve Calla - GitHub Profile](https://github.com/stevecalla)
2. Deployed Site URL - Heroku: Not applicable.
3. GitHub Repo: <https://github.com/stevecalla/social-network-api>
4. Contact: [Email Steve](mailto:callasteven@gmail.com)

## License 

[![License:  MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
This project is licensed under the terms of the <span style="color:red">The MIT License</span>. Please click on the license badge for more information.