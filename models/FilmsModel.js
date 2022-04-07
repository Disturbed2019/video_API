const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    title:{
        type:String,
        required:true,
    },
    year:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true
    },
    rating:{
        type: String,
        required: true
    },
    preview_img:{
        type: String,
        required: true
    },
    bg_img:{
        type: String,
        required: true
    },
    trailer_link:{
        type: String,
        required: true
    }

})

module.exports = model('films', schema)