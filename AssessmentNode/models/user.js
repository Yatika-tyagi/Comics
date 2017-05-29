// Load required packages
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Define our user schema
var Us_Schema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
   role: {
       type: String
   },
   updated_at: {
      type: Date, default: Date.now
   }
});


module.exports = mongoose.model('User', Us_Schema);