const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')
const PostController = require('../controllers/PostController')
const UploadController = require('../controllers/UploadController')


router.get('/', (req, res) => {
	res.json({
		status: 200,
		message: 'connnected to db'
	})
})

router.post('/user/register', UserController.Register)	

router.route('/posts')
	.get(PostController.Index)


router.route('/posts')
	.post(UploadController.upload.single('image'), PostController.New)

router.route('/posts/:post_id')
	.delete(PostController.Delete)

module.exports = router