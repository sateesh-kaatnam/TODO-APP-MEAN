const mongoose=require('mongoose');

const todoSchema= new mongoose.Schema({
    title:{
        type:String,
        required: true,
        minlength: 1,
        trim:true
    },
    status:{
        type:Boolean    
    }
});

const todo=mongoose.model('todo',todoSchema);

module.exports=todo;