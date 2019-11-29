require('dotenv').config()
const mongoose = require('mongoose')

const connectdb = async() => {
	try {
		await mongoose.connect(process.env.MONGODB_URI,
		{
			useNewUrlParser: true,
  			useUnifiedTopology: true
		})

		console.log('connected to db')
	} catch(err) {
		console.log(err)
	}
}

module.exports = connectdb