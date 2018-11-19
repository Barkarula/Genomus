const mongoose = require('mongoose');

const genSchema = mongoose.Schema({
    genId:{
        type:Number,
        default:303030,
        required:true,
        unique:1,
        minlength:6,
        maxlength:6
    },
    ownerGenId:{
        type:String,
        required:true
    },
    rule_0:{
        type:Number,
        default:3
    },
    rule_1:{
        type:Number,
        default:3
    },
    rule_2:{
        type:Number,
        default:3
    }
},{timestamps:true})

const Gen = mongoose.model('Gen',genSchema )

module.exports = { Gen }