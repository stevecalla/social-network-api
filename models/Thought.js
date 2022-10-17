const { Schema, model } = require('mongoose');

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtsText: {
      type: String,
      required: true,
      min: 1,
      max: 280,
      // maxlength: 25,
  },
    createdAt: {
      type: Date,
      default: Date.now,
      get: format_date
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

function format_date(date) {
  
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', timeZoneName: 'short'};

  return new Intl.DateTimeFormat('en-US', options).format(date);
};

// Initialize our User model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
