var mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Blog = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title:{
    type:String
  },
  author:{
    type:String
  },
  description:{
    type:String
  },
  image:{
    type:String
  },
  status:{
    type:String,
    default:'Published'
  },
  date:{
    type:String
  },
  imageTitle:{
    type:String,
  },
  imageSubtitle:{
    type:String,
  }

},{ collection : 'blogs' })

module.exports = mongoose.model('Blog', Blog)
