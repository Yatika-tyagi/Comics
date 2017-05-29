// Load required packages
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Define our user schema
var Ad_Schema = new Schema({
    admin: {
        type: String
    },
    password: {
        type: String
    }
   
});

module.exports = mongoose.model('Admin', Ad_Schema);