//Modelo de ejemplo para alojar datos en una DB mongo
const mongoose = require("mongoose");

//Creación del Schema Post
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Un post debe tener un título"],
    },
    id :{ //Id no tan necesario, mongoDB agrega por default '_id'
        type:Number,
            required:  [true, "Un post debe tener un id"],    
        },
   // age :{
       // type:Number,
       // required:  [true],    
       // },
    description: {
        type: String,
        required: [true, "Un post debe tener una descripción"],
    },
 });

//Creación del modelo Post
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
