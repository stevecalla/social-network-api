const { Schema, model } = require('mongoose');
const { formatDate } = require('../utils/helpers');
const reactionsSchema = require('./Reactions');

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtsText: {
      type: String,
      required: true,
      min: 1,
      max: 280,
    },
      createdAt: {
        type: Date,
        default: Date.now,
        get: formatDate
    },
      userName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 30
    },
    reactions: [reactionsSchema]
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
