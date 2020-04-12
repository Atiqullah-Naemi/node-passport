const express = require('express')
const router = express.Router()
const verify = require('./verify')
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
router.post('/user/login', UserController.Login)	

router.get('/posts',
verify.customMiddleware,
PostController.Index)

router.post('/posts',
verify.customMiddleware,
UploadController.upload.single('image'),
PostController.New)

router.delete('/posts/:post_id',
verify.customMiddleware,
PostController.Delete)

module.exports = router