const express=require('express');
const app=express();
const {mongoose}=require('./db/mongoose');
const bodyParser= require('body-parser');
const todo=require('./db/models/todos');
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/todos',(req,res)=>{
    todo.find({}).then((todos)=>{
        res.header("Access-Control-Allow-Origin", "*");
        res.send(todos);
    })
});

app.post('/todos',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    let newTask=new todo({
        title:req.body.title,
        status:false
    });
    newTask.save().then((allTasks)=>{
       res.send(allTasks);
    })

});

app.put('/todos/:id',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    todo.findByIdAndUpdate({_id: req.params.id},{
       "$set":{"status":req.body.status}
    }).then(()=>{
        res.send(null);
    })
});

app.delete('/todos/:id',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    todo.findOneAndRemove(
        {_id:req.params.id}
    ).then((remainingList)=>{
        res.send(remainingList);
    })
});

app.use(allowCrossDomain);

app.listen(8080,()=>{
    console.log("server is listening to port 8080");
});