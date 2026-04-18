const mongoose = require("mongoose");
const urlSchema= new mongoose.Schema(
    {
        originalUrl:{
          type: String,
          required:true,
          trim:true,
        },
         shortCode:{
            type:String,
            required:true,
            unique:true,
            index:true,
         },
         clicks:{
            type:Number,
            default:0
         },
         userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: false
         }
    },
    {
        timestamps:true
    }
)
module.exports = mongoose.model("Url", urlSchema);
