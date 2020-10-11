const mongoose = require('mongoose');
const config = require('config');


const connectAtlas = config
		.get('mongoURI')
		.replace('<password>',config.get('pw'))
		.replace('<dbname>',config.get('dbname'));

const dbOptions = {
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
}

const connect = async () => {
	await mongoose
		.connect(connectAtlas, dbOptions)
		.then(() => console.log(`database connected: ${config.get('dbname')}`))
		.catch(err => console.error(err));
}


module.exports = connect;