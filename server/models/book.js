const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    review:{
        type:String,
        default:'n/a'
    },
    pages:{
        type:String,
        default:'n/a'
    },
    rating:{
        type:Number,
        required:true,
        min:1,
        max:5
    },
    price:{
        type:String,
        default:'n/a'
    },
    ownerId:{
        type:String,
        required:true
    },
    genId:{
        type:Number,
        default:202020,
        required:true,
        unique:1,
        minlength:6,
        maxlength:6
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

const Book = mongoose.model('Book',bookSchema )

module.exports = { Book }