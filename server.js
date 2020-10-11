const app = require('./app.js');
const connectDB = require('./config/db');

connectDB();

const PORT = process.env.PORT ||  8000;
app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});