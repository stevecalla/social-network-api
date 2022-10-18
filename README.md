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
This app is a social network API using Express (server), Mongo (database) and Mongoose that allows users to share their thoughts, react to friends’ thoughts, and create a friend list.
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

This app is a deployed solely on the back-end using Node.js, Mongo, Mongoose and Insomia (for the routes).

## Features

This app includes features that allows the user to view, add, update and delete blog posts as well as add comments to posts. It includes a variety of features such as login, logout, signup, add comments, add blog posts, edit blog posts and delete blog posts as well as varies views..

1. Model/Database: mysql2, sequalize, , mockaroo.com (for mock seed data)
2. View: handlebars, express-handlebars, Javascript, HTML, CSS, FontAwesome
3. Controller/Router: express
4. Helpers: bcrypt, dotenv
5. Sessions/Cookies: connect-sessions-sequalize
6. Deployed Site: Heroku
7. Project Management/Repo: Github

<!-- ## Future Enhancements

This app can be enhanced by (a) using/adding dates such as created at, updated at, deleted at to track information by time, (b) add soft and hard delete options so users can recover changes if necessary, (c) add the ability to manage middle names, (d) add more fields for employees or roles such as employee salary, date of birth, social security number (secured in some manner), email address, position start date and more, (e) add ka secure password for the mysql database connection, and (f) add additional testing. -->
<!-- 
1. TBD
2. TBD
3. TBD
-->

## App Preview - Static Screenshots

<img alt="Map" src="public/images/screenshot-homePage.png">

## App Preview - WalkThrough Videos

[Link to Setup Video](https://youtu.be/GVZ9KZithiY)

This video shows - the category routes including get all categories, get single category by id, post (add a new category), put (update a category by id), delete a category by id.

![In Insomnia, the user tests “GET tags,” “GET Categories,” and “GET All Products.”.](public/images/tech-blog-video.gif)

<!-- <img src="public/images/powder-bound.gif" width="" height=""/> -->

## Tests

No tests at this time.

## Contributing

Contributor Covenant Code of Conduct

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md)

<!-- DELETE THIS SECTION FOR THE FINAL README. For more information on example contribution guidelines please see the links below.

1. Contributor Convent: [Information](https://www.contributor-covenant.org/)
2. Contributor Covenant Code of Conduct: [Markdown File](hhttps://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md)
-->

## Resources

1. Project Manager: [Steve Calla - GitHub Profile](https://github.com/stevecalla)
2. Deployed Site URL - Heroku: <https://techie-blog-301.herokuapp.com/>
3. GitHub Repo: <https://github.com/stevecalla/tech-blog>
4. GitHub Projects: https://github.com/users/stevecalla/projects/20
4. Contact: [Email Steve](mailto:callasteven@gmail.com)

## License 

[![License:  MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
This project is licensed under the terms of the <span style="color:red">The MIT License</span>. Please click on the license badge for more information.

<!-- DELETE THIS SECTION FOR THE FINAL README. Per Github, you are under no obligation to choose a license. However, without a license, the default copyright laws apply, meaning that you retain all rights to your source code and no one may reproduce, distribute, or create derivative works from your work. If you're creating an open source project, we strongly encourage you to include an open source license. The Open Source Guide provides additional guidance on choosing the correct license for your project. SEE THE FOLLOWING LINKS FOR MORE INFORMATION:

1. GitHub: [Licensing a repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)
2. Open Source Guide: [To Choose A License](https://choosealicense.com/)
-->

<!-- OTHER SECTIONS IF YOU LIKE
## Technologies

1. HTML
2. CSS
3. JavaScript
4. GitHub (website hosting and source code management)
5. TBD
6. TBD

### 3rd Party Application Programming Interfaces

1. [TBD](https://TBD)
2. [TBD](https://TBD)
3. [TBD](https://TBD)

### Dependencies

1. [VS Code Live Server](https://ritwickdey.github.io/vscode-live-server/)

## Collaborators

1. FIRST & LAST NAME: [Github LINK](https://github.com/<Github user name>/)
2. FIRST & LAST NAME: [Github LINK](https://github.com/<Github user name>/)
3. FIRST & LAST NAME: [Github LINK](https://github.com/<Github user name>/)

## Resources

1. GitHub Repo: <https://github.com/tbd/tbd>
2. GitHub Hosted URL: <https://tbd.tbd.com/tbd>
-->
