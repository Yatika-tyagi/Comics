// Load required packages
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Define our user schema
var Sn_Schema = new Schema({
    Sn_Id:{
        type: Number
    },
    Sr_Id:{
        type: Number
    },
    Sn_Name: {
        type: String
    },
    Sn_Description: {
        type: String
    },
     Sn_CreatedDate: {
       type: Date, default: Date.now
    },
     Sn_UpdatedDate: {
       type: Date, default: Date.now
    },
    Sn_StartsOn: {
        type: String
    },
    Sn_EndsOn: {
        type: String
    },
});


module.exports = mongoose.model('Season', Sn_Schema);




//Name, description , starts on, ends on, created date, updated date)




