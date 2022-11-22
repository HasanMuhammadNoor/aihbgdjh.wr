const { Schema, model } = require('mongoose');


// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match:[/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,'Please enter a valid email address.'],
    },
    thoughts: [{
      type: Schema.Type.ObjectId,
      ref:'Thoughts'
    }],
    friends: [{
      type: Schema.Type.ObjectId,
      ref:'User'
    }],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id:false
  }
);

const User = model('User', userSchema);

module.exports = User;
