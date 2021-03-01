// Step 3 - this is the code for ./models.js

var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});
var Image = new mongoose.model('Image', imageSchema, 'uploads');

//Image is a model which has a schema imageSchema

module.exports = Image; //new mongoose.model('Image', imageSchema, 'uploads');
