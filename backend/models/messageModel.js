const mongoose = require('mongoose');
const messageModel = new mongoose.Schema({
    sebder: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    content: {type: String, trim: 'true'},
    chat: [{type: mongoose.Schema.Types.ObjectId, ref: 'chat'}]
},
{
    timestamps: true
}
);

const message = mongoose.model('Message', messageModel);
module.exports = message;