const Post = require('../models/Post')
const User = require('../models/User')

const Index = (req, res) => {
	Post.find((err, posts) => {
		if (err) {
			res.json({
				status: "error",
				message: "something went wrong"
			})
		}

		res.json({
			status: 500,
			message: "data recieved successfully",
			data: posts
		})
	}).populate('user', 'name') // get only user name from User object
		
}

const New = (req, res) => {
	const post = new Post({
		title: req.body.title,
		content: req.body.content,
		image: req.file.path,
		user: req.user._id
	})

	post.save(err => {
		if (err) throw new Error(`There was a problem creating new post ${err}`)

		res.json({
			message: "New post created successfully",
			data: post
		})
	})
}

const Delete = (req, res) => {
	Post.remove({
		_id: req.params.post_id
	}, (err, post) => {
		if (err) res.json(err)

		res.json({
			status: 500,
			message: "Post deleted successfully"
		})
	})
}

module.exports = { Index, New, Delete }