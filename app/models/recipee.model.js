var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var RecipeeSchema = new Schema({
    username: String,
    created_at: Date,
    completed: Boolean,
    sent: Boolean,
    content: String
});


mongoose.model('Recipee', RecipeeSchema);