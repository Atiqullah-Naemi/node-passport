const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
})

module.exports = mongoose.model('Post', PostSchema)