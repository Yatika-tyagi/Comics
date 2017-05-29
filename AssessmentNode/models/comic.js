// Load required packages
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Define our user schema
var Cm_Schema = new Schema({
    Cm_Id:{
        type: Number
    },
    Sn_Id:{
        type: Number
    },
    Sr_Id:{
        type: Number
    },
    Cm_Name: {
        type: String
    },
    Cm_Image: {
        type: String
    },
     Cm_CreatedDate: {
        type: Date, default: Date.now
    },
     Cm_UpdatedDate: {
       type: Date, default: Date.now
    },
 Cm_Story: {
        type: String
    },
});

module.exports = mongoose.model('Comic', Cm_Schema);

//Name, image, story, created date, updated date