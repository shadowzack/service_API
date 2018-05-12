const express = require('express');
const router  = express.Router();


router.get('/',(req ,res,next)=>{

    res.status(200).json({
        message:'handling GET reqest to /books'
    });
});


router.post('/',(req ,res,next)=>{

    res.status(200).json({
        message:'handling POST reqest to /books'
    });
});

router.get('/:book_id',(req,res,next)=>{

    const id= req.params.book_id;
    res.status(200).json({
        id:id
    });
});
module.exports = router;