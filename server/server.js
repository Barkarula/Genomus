const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV);
const app = express();
//const api = express.Router();

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE)

const { User } = require('./models/user'); 
const { Book } = require('./models/book');
const { Gen } = require('./models/gen');
const { IGen } = require('./models/igen');
const { auth } = require('./middleware/auth');

app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static('client/build'))

// GET //
app.get('/api/auth',auth,(req,res)=>{
    res.json({
        isAuth:true,
        id:req.user._id,
        email:req.user.email,
        name:req.user.name,
        lastname:req.user.lastname,
        genId:req.user.genId,
        role:req.user.role,
        rule_0:req.user.rule_0,
        rule_1:req.user.rule_1,
        rule_2:req.user.rule_2,
        rule_3:req.user.rule_3,
        rule_4:req.user.rule_4,
        rule_5:req.user.rule_5,
        rule_6:req.user.rule_6,
        rule_7:req.user.rule_7,
        rule_8:req.user.rule_8,
        rule_9:req.user.rule_9,
        rule_10:req.user.rule_10,
        rule_11:req.user.rule_11,
        rule_12:req.user.rule_12,
        rule_13:req.user.rule_13,
        rule_14:req.user.rule_14,
        rule_15:req.user.rule_15,
        rule_16:req.user.rule_16,
        rule_17:req.user.rule_17,
        rule_18:req.user.rule_18,
        rule_19:req.user.rule_19,
        rule_20:req.user.rule_20,
        rule_21:req.user.rule_21,
        rule_22:req.user.rule_22,
        rule_23:req.user.rule_23,
        rule_24:req.user.rule_24,
        rule_25:req.user.rule_25,
        rule_26:req.user.rule_26,
        rule_27:req.user.rule_27,
        rule_28:req.user.rule_28,
        rule_29:req.user.rule_29
    })
});

app.get('/api/logout',auth,(req,res)=>{
    req.user.deleteToken(req.token,(err,user)=>{
        if(err) return res.status(400).send(err);
        res.sendStatus(200)
    })
})


app.get('/api/getBook',(req,res)=>{
    let id = req.query.id;

    Book.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.send(doc);
    })
})

app.get('/api/getIgen',(req,res)=>{
    let id = req.query.id;

    IGen.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.send(doc);
    })
})

app.get('/api/getUser',(req,res)=>{
    let id = req.query.id;

    User.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.send(doc);
    })
})

app.get('/api/books',(req,res)=>{
    // locahost:3001/api/books?skip=3&limit=2&order=asc
    let skip = parseInt(req.query.skip);
    let limit = parseInt(req.query.limit);
    let order = req.query.order;

    // ORDER = asc || desc
    Book.find().skip(skip).sort({_id:order}).limit(limit).exec((err,doc)=>{
        if(err) return res.status(400).send(err);
        res.send(doc);
    })
})

app.get('/api/getUserRole',(req,res)=>{
    let id = req.query.id;

    User.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.send(doc);
    })
})

app.get('/api/logout',auth,(req,res)=>{
    req.user.deleteToken(req.token,(err,user)=>{
        if(err) return res.status(400).send(err);
        res.sendStatus(200)
    })
})

app.get('/api/getReviewer',(req,res)=>{
    let id = req.query.id;

    User.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json({
            name: doc.name,
            lastname: doc.lastname
        })
    })
})

app.get('/api/getGenRule',(req,res)=>{
    let id = req.query.id;

    User.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json({
            name: doc.name,
            lastname: doc.lastname
        })
    })
})

app.get('/api/users',(req,res)=>{
    User.find({},(err,users)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(users)
    })
})

app.get('/api/user_posts',(req,res)=>{
    Book.find({ownerId:req.query.user}).exec((err,docs)=>{
        if(err) return res.status(400).send(err);
        res.send(docs)
    })
})

app.get('/api/user_gens',(req,res)=>{
    Gen.find({ownerGenId:req.query.user}).exec((err,docs)=>{
        if(err) return res.status(400).send(err);
        res.send(docs)
    })
})

app.get('/api/user_role',(req,res)=>{
    User.find({role:req.query.user}).exec((err,docs)=>{
        if(err) return res.status(400).send(err);
        res.send(docs)
    })
})

app.get('/api/getUser_role',(req,res)=>{
    let id = req.query.id;

    User.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json({
            name: doc.name,
            lastname: doc.lastname,
            role: doc.role
        })
    })
})


// POST //
app.post('/api/book',(req,res)=>{
    const book = new Book(req.body)

    book.save((err,doc)=>{
        if(err) return res.status(400).send(err);
        res.status(200).json({
            post:true,
            bookId: doc._id
        })
    })
})

app.post('/api/gen',(req,res)=>{
    const gen = new Gen(req.body)

    gen.save((err,doc)=>{
        if(err) return res.status(400).send(err);
        res.status(200).json({
            post:true,
            gId: doc._id
        })
    })
})

app.post('/api/igen',(req,res)=>{
    const igen = new IGen(req.body)

    igen.save((err,doc)=>{
        if(err) return res.status(400).send(err);
        res.status(200).json({
            post:true,
            igenId: doc._id
        })
    })
})

app.post('/api/register',(req,res)=>{
    const user = new User(req.body);

    user.save((err,doc)=>{
        if(err) return res.json({success:false});
        res.status(200).json({
            success:true,
            user:doc
        })
    })
})

app.post('/api/login',(req,res)=>{
    User.findOne({'email':req.body.email},(err,user)=>{
        if(!user) return res.json({isAuth:false,message:'Auth failed, email not found'})

        user.comparePassword(req.body.password,(err,isMatch)=>{
            if(!isMatch) return res.json({
                isAuth:false,
                message:'Wrong password'
            });

            user.generateToken((err,user)=>{
                if(err) return res.status(400).send(err);
                res.cookie('auth',user.token).json({
                    isAuth:true,
                    id:user._id,
                    email:user.email
                })
            })
        })
    })
})


// UPDATE //
app.post('/api/book_update',(req,res)=>{
    Book.findByIdAndUpdate(req.body._id,req.body,{new:true},(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json({
            success:true,
            doc
        })
    })
})

app.post('/api/user_update',(req,res)=>{
    User.findByIdAndUpdate(req.body._id,req.body,{new:true},(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json({
            success:true,
            doc
        })
    })
})

app.post('/api/igen_update',(req,res)=>{
    IGen.findByIdAndUpdate(req.body._id,req.body,{new:true},(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json({
            success:true,
            doc
        })
    })
})

// DELETE //

app.delete('/api/delete_book',(req,res)=>{
    let id = req.query.id;

    Book.findByIdAndRemove(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json(true)
    })
})

app.delete('/api/delete_user',(req,res)=>{
    let id = req.query.id;

    User.findByIdAndRemove(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json(true)
    })
})

if(process.env.NODE_ENV === 'production'){
    const path = require('path');
    app.get('/*',(req,res)=>{
        res.sendfile(path.resolve(__dirname,'../client','build','index.html'))
    })
}


const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`SERVER RUNNNING`)
})

