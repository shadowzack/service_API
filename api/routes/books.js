const express = require('express');
const router  = express.Router();
const Book=require('../models/book');
const mongoose=require('mongoose');

router.get('/',(req ,res,next)=>{

    Book.find().select('name price _id').exec().then((result) => {
        const response={
            books:result.map(book=>{
                return{
                    _id:book._id,
                    name:book.name,
                    price:book.price,
                    request:{
                        types:'GET',
                        url:'https://computer-store-service.herokuapp.com/books/'+book._id
                    }
                }
            })
        };
        console.log(result);
        res.status(200).json(response);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
    
});


router.post('/',(req ,res,next)=>{

    const book=new Book({
        _id:new mongoose.Types.ObjectId(),
        name:req.body.name,
        price:req.body.price
    });  
    //book.save(); 
    book.save().then((result) => {
        console.log(result);
        res.status(200).json({
            message:'book created successfully',
            createdBook:book
        });
    }).catch((err) => {
        console.log(err);

        res.status(500).json({
            error:err,
            
        });
    });
    
});

router.get('/:book_id',(req,res,next)=>{

    const id= req.params.book_id;
    Book.findById(id).exec().then((result) => {
        console.log(result);
        res.status(200).json({
            result
        });
    }).catch((err) => {
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
    
});

router.get('/:books',(req,res,next)=>{

  
    res.status(200).json({
        message:'handling GET reqest to /books'
    });
});


/*
router.get('/:book_id&date',(req,res,next)=>{

    const id= req.params.book_id;
    res.status(200).json({
        id:id
    });
});

*/
router.delete("/:book_id",(req,res,next)=>{
    const id=req.params.book_id;
    Book.remove({_id:id}).exec().then((result) => {
        console.log(result);
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({
            error:err
        });
    });;
});

module.exports = router;