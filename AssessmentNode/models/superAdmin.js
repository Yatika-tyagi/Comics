// Load required packages
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Define our user schema
var Sa_Schema = new Schema({
    superadmin: {
        type: String
    },
    password: {
        type: String
    }
   
});


module.exports = mongoose.model('SuperAdmin', Sa_Schema);






