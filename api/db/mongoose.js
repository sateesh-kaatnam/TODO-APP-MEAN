const mongoose= require('mongoose');
mongoose.Promise=global.Promise;

mongoose.connect('mongodb://localhost:27017/todolist', {useNewUrlParser: true}).then(()=>{
    console.log("Successfully connected to data base..!");
}).catch((err)=>{
    console.log("unable to connect to data base"+err)
});

mongoose.set('userCreateIndex',true);
mongoose.set('userFindAndModify',false);

module.exports={
    mongoose
}