// Load required packages
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Define our user schema
var Sr_Schema = new Schema({
    Sr_Id :{
        type: Number
    },
    Sr_Name: {
        type: String
    },
    Sr_Description: {
        type: String
    },
     Sr_CreatedDate: {
       type: Date, default: Date.now
    },
     Sr_UpdatedDate: {
        type: Date, default: Date.now
    },
 Sr_CreatedBy: {
        type: String
    },
});

module.exports = mongoose.model('Series', Sr_Schema);





//Name, description, created date, updated date, created by)