const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    fName : {
        type : String,
        maxLength : 50,
        required : true,
    },
    mName : {
        type : String,
        maxLength : 50
    },
    lName : {
        type : String,
        maxLength : 50,
        required : true,
    },
    hName: {
        type: String,
        enum: [
          'Select Your Hostel',
          'Boys Hostel - Block 1',
        'Boys Hostel - Block 2',
        'Boys Hostel - Block 3',
        'Girls Hostel - Block 1',
        'Girls Hostel - Block 2',
        'Girls Hostel - Block 3',
        ],
        required : true
    },
    rNO : {
        type : Number,
        maxLength : 10,
        required : true,
    },
    mode: {
        type: String,
        enum: ['Day', 'Night'],
        required: true,
    },
    pOV : {
        type : String,
        maxLength : 50,
        required : true,
    },
    time: {
        type: Date,
        required: true,
    },
    Status: {
        type: String,
    }
})

const studentData = mongoose.model("studentData", studentSchema);
module.exports = studentData; 


