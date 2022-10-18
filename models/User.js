const { Schema, model } = require('mongoose');
const { emailRegex } = require('../utils/helpers');
const { formatDate } = require('../utils/helpers');

// Schema to create User model
const userSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      maxlength: 30
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: [emailRegex, 'Please fill a valid email address']
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      }
    ],
    createdAt: {
      type: Date,
      default: Date.now,
      get: formatDate
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  },
);

// Create a virtual property for the count of friends
userSchema
  .virtual('friendsCount')
  .get(function () {
    return this.friends.length;
  });

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
