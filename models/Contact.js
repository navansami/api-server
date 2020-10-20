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
		required: true,
	},
	"email": {
		type: String,
		required: true
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
		default: 'https://icon2.cleanpng.com/20180421/dxq/kisspng-silhouette-anonymity-clip-art-suit-clipart-5adaba4db31ac9.4969923415242839817336.jpg'
	}
});

module.exports = mongoose.model("Contact", ContactSchema);