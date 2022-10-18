const { Schema, Types } = require('mongoose');
const { formatDate } = require('../utils/helpers');

// create reaction schema
const reactionsSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      min: 1,
      max: 280,
    },
    userName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 30
    },
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
  }
);

module.exports = reactionsSchema;
