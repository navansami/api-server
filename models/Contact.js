const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
	"name": {
		type: String,
		required: true,
		unique: true
	},
	"extension": {
		type: Number,
		required: true,
	},
	"mobile": {
		type: String,
		required: false,
	},
	"email": {
		type: String,
		required: false
	},
	"department": {
		type: String,
		required: true
	},
	"jobTitle": {
		type: String,
		required: false
	},
	"comments": {
		type: String,
		require:false
	},
	"image": {
		type: String,
		default: 'https://toppng.com/uploads/preview/tux-linux-logo-start-button-icon-linux-11562927335gdm2cpaczy.png'
	}
});

module.exports = mongoose.model("Contact", ContactSchema);