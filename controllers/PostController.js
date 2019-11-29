const Post = require('../models/Post')

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
	})
		
}

const New = (req, res) => {
	let post = new Post()

	post.title = req.body.title
	post.content = req.body.content
	post.image = req.file.path

	post.save(err => {
		if (err) res.json(err)

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