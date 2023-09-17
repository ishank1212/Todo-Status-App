const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://sampleish:Gin8WtNuUYNm67OF@cluster0.of01qry.mongodb.net/';
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose
	.connect(mongoURI, options)
	.then(() => {
		console.log('Connected to MongoDB');
		// Start your application or perform additional operations
	})
	.catch((error) => {
		console.error('Error connecting to MongoDB:', error);
	});
