const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
	"name": {
		type: String,
		required: true
	},
	"mobile": {
		type: String,
		required: true,
		unique: true
	},
	"email": {
		type: String,
		required: true
	}
});

module.exports = mongoose.model("Contact", ContactSchema);