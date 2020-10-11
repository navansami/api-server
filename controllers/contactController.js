const Contacts = require('../models/Contact');


exports.getAllContacts = async (req,res) => {
	try {
		const contacts = await Contacts.find();
		res.status(200).json({
		"message": "success",
		"contacts length": contacts.length,
		"data": {
			contacts
			}
		});
	} catch(err) {

	}
}

exports.addContact = async (req, res) => {
	try {
		const contacts = await Contacts.create(req.body);
		res.status(201).json({
		"message": "success",
		"data": {
				contacts
			}
		});	
	} catch(err) {
		console.error(err);
	}
}


exports.updateContact = async (req, res) => {
	try {
		const contacts = await Contacts.findByIdAndUpdate(req.params.id,req.body, {
			new: true,
			runValidators:true
		});
		res.status(202).json({
		"message": "success",
		"data": {
				contacts
			}
		});	
	} catch(err) {
		console.log("Possible Error: ",err);
		res.status(404).json({
		"message": "fail",
		"message": err
		});	
	}
}


exports.deleteContact = async (req, res) => {
	try {
		await Contacts.findByIdAndDelete(req.params.id);
		res.status(400).json({
		"message": "success",
		"data": null
		});	
	} catch(err) {
		res.status(404).json({
		"message": "fail",
		"message": err
		});	
	}
}