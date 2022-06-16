const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/firstMongoose", () => {
    console.log("connected");
},
    e => console.error(e)

)