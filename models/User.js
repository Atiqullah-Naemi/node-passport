const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		min: 3,
		max: 255
	},
	email: {
		type: String,
		required: true,
		min: 10
	},
	password: {
		type: String,
		required: true,
		min: 6
	},
	profile: {
		type: String
	},
	posts: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Post'
	},
	date: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('User', UserSchema)