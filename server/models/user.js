const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('./../config/config').get(process.env.NODE_ENV);
const SALT_I = 10;

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true,
        unique:1
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    name:{
        type:String,
        maxlength:100
    },
    lastname:{
        type:String,
        maxlength:100
    },
    role:{
        type:Number,
        default:0
    },
    token:{
        type:String
    },
    genId:{
        type:String,
        default:101010,
        required:true,
        unique:1,
        minlength:6,
        maxlength:7
    },
    rule_0:{
        type:Number,
        default:2
    },
    rule_1:{
        type:Number,
        default:2
    },
    rule_2:{
        type:Number,
        default:2
    },
    rule_3:{
        type:Number,
        default:2
    },
    rule_4:{
        type:Number,
        default:2
    },
    rule_5:{
        type:Number,
        default:2
    },
    rule_6:{
        type:Number,
        default:2
    },
    rule_7:{
        type:Number,
        default:2
    },
    rule_8:{
        type:Number,
        default:2
    },
    rule_9:{
        type:Number,
        default:2
    },
    rule_10:{
        type:Number,
        default:2
    },
    rule_11:{
        type:Number,
        default:2
    },
    rule_12:{
        type:Number,
        default:2
    },
    rule_13:{
        type:Number,
        default:2
    },
    rule_14:{
        type:Number,
        default:2
    },
    rule_15:{
        type:Number,
        default:2
    },
    rule_16:{
        type:Number,
        default:2
    },
    rule_17:{
        type:Number,
        default:2
    },
    rule_18:{
        type:Number,
        default:2
    },
    rule_19:{
        type:Number,
        default:2
    },
    rule_20:{
        type:Number,
        default:2
    },
    rule_21:{
        type:Number,
        default:2
    },
    rule_22:{
        type:Number,
        default:2
    },
    rule_23:{
        type:Number,
        default:2
    },
    rule_24:{
        type:Number,
        default:2
    },
    rule_25:{
        type:Number,
        default:2
    },
    rule_26:{
        type:Number,
        default:2
    },
    rule_27:{
        type:Number,
        default:2
    },
    rule_28:{
        type:Number,
        default:2
    },
    rule_29:{
        type:Number,
        default:2
    }
})

userSchema.pre('save',function(next){
    var user = this;

    if(user.isModified('password')){
        bcrypt.genSalt(SALT_I,function(err,salt){
            if(err) return next(err);

            bcrypt.hash(user.password,salt,function(err,hash){
                if(err) return next(err);
                user.password = hash;
                next();
            })
        })
    } else {
        next()
    }
})

userSchema.methods.comparePassword = function(candidatePassword,cb){
    bcrypt.compare(candidatePassword,this.password,function(err,isMatch){
        if(err) return cb(err);
        cb(null,isMatch);
    })
}

userSchema.methods.generateToken = function(cb){
    var user = this;
    var token = jwt.sign(user._id.toHexString(),config.SECRET);

    user.token = token;
    user.save(function(err,user){
        if(err) return cb(err);
        cb(null,user)
    })
}

userSchema.statics.findByToken = function(token,cb){
    var user  = this;

    jwt.verify(token,config.SECRET,function(err,decode){
        user.findOne({"_id":decode,"token":token},function(err,user){
            if(err) return cb(err);
            cb(null,user)
        })
    })
}


userSchema.methods.deleteToken = function(token,cb){
    var user = this;

    user.update({$unset:{token:1}},(err,user)=>{
        if(err) return cb(err);
        cb(null,user)
    })
}


const User = mongoose.model('User',userSchema)

module.exports = { User }