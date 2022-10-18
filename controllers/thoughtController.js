const { User, Thought } = require('../models');

module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  createThought(req, res) {
    console.log(req.body)
    console.log(req.body.userName)
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate (
          // { _id: req.body.userId },
          { userName: req.body.userName },
          { $addToSet: { thoughts: thought._id } },
          // { new: true }
        );
      })
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'Thought created, but found no user with that ID' })
          : res.json('Created the thought 🎉')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // Update a thought
  updateThought(req, res) {
    Thought.findOneAndUpdate({ _id: req.params.thoughtId }, req.body, { returnOriginal: false }, (err, result) => {
      if (result) {
        res.status(200).json(result);
        console.log(`Updated: ${result}`);
      } else {
        console.log('Uh Oh, something went wrong');
        res.status(500).json({ message: 'something went wrong' });
      }
    })
  },
  // Delete a thought and remove from user document
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) => {
        console.log(thought)
        return User.findOneAndUpdate (
          { userName: thought.userName },
          { $pull: { thoughts: thought._id } }
        );
      })
      .then(() => res.json({ message: 'thought deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Add a Reaction
  addReaction(req, res) {
    // console.log(req.params, req.params.thoughtId, req.body)
    Thought.findOne({ _id: req.params.thoughtId })
    .select('-__v')
    .then((result) => {
      // check to ensure reaction doesn't exist already
      let body = result.reactions.map(element => element.reactionBody);
      let user = result.reactions.map(element => element.userName);
      let isUpdatable = true;
      if (body.includes(req.body.reactionBody) && user.includes(req.body.userName)) {
        isUpdatable = false;
      }
      console.log('1 isUpdatable = ', isUpdatable);
      return isUpdatable;
    })
    .then((isUpdatable) => {
      console.log('2 = updatable = ', isUpdatable);
      if (isUpdatable) {
        Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $addToSet: { reactions: req.body } },
          { returnOriginal: false },
          (err, result) => {
            if (result) {
              res.status(200).json(result);
              console.log(`Updated: ${result}`);
            } else {
              console.log("Uh Oh, something went wrong");
              res.status(500).json({ message: "something went wrong" });
            }
          }
        );
      }
      else {
        res.status(200).json({ message: 'Reaction already exists' })
      }
    })
  },
  // Delete a reaction
  deleteReaction(req, res) {
    console.log(req.params.thoughtId, req.body.reactionId)
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.body.reactionId } } },
      { returnOriginal: false },
      (err, result) => {
        console.log('result = ', result.reactions, result.reactions.reactionId)
        if (result) {
          res.status(200).json(result);
          console.log(`Updated: ${result}`);
        } else {
          console.log("Uh Oh, something went wrong");
          res.status(500).json({ message: "something went wrong" });
        }
      }
    );
  },
};