const { Schema, model } = require('mongoose');

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtsText: {
      type: String,
      required: true,
      maxlength: 25,
  },
    createdAt: {
      type: Date,
      default: Date.now,
  },
    userName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 30
  }
    // reactions: 
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Initialize our User model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
