const mongoose = require('mongoose');

const EmployeeHistory = mongoose.Schema({
    loginId: {
        type: String,
        required: true
    },
    empId: {
        type: String,
        required: true
    },
    empName: {
        type: String,
        required: true
    },
    actions: {
        type: Array,
        required: true
    },
    weekStartDate: {
        type: String,
        required: true
    },
    lastSignIn: {
        type: String,
        required: false
    },
    reportsTo: {
        type: String,
        required: false
    },
    lastSingOut: {
        type: String,
        default: null
    },
    lastBreak: {
        breakType: {
            type: String,
            default: null
        },
        outTimeStamp: {
            type: String,
            default: null
        } ,
        inTimeStamp: {
            type: String,
            default: null
        } 
    }
})

const EmployeeData= module.exports = mongoose.model('EmployeeHistory', EmployeeHistory);