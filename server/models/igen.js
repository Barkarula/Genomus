const mongoose = require('mongoose');

const igenSchema = mongoose.Schema({
    rule_0:{
        type:String,
        required:true
    },
    rule_1:{
        type:String,
        required:true
    },
    rule_2:{
        type:String,
        required:true
    },
    rule_3:{
        type:String,
        default:2
    },
    rule_4:{
        type:String,
        default:2
    },
    rule_5:{
        type:String,
        default:2
    },
    rule_6:{
        type:String,
        default:2
    },
    rule_7:{
        type:String,
        default:2
    },
    rule_8:{
        type:String,
        default:2
    },
    rule_9:{
        type:String,
        default:2
    },
    rule_10:{
        type:String,
        default:2
    },
    rule_11:{
        type:String,
        default:2
    },
    rule_12:{
        type:String,
        default:2
    },
    rule_13:{
        type:String,
        default:2
    },
    rule_14:{
        type:String,
        default:2
    },
    rule_15:{
        type:String,
        default:2
    },
    rule_16:{
        type:String,
        default:2
    },
    rule_17:{
        type:String,
        default:2
    },
    rule_18:{
        type:String,
        default:2
    },
    rule_19:{
        type:String,
        default:2
    },
    rule_20:{
        type:String,
        default:2
    },
    rule_21:{
        type:String,
        default:2
    },
    rule_22:{
        type:String,
        default:2
    },
    rule_23:{
        type:String,
        default:2
    },
    rule_24:{
        type:String,
        default:2
    },
    rule_25:{
        type:String,
        default:2
    },
    rule_26:{
        type:String,
        default:2
    },
    rule_27:{
        type:String,
        default:2
    },
    rule_28:{
        type:String,
        default:2
    },
    rule_29:{
        type:String,
        default:2
    }
},{timestamps:true})

const IGen = mongoose.model('IGen',igenSchema )

module.exports = { IGen }