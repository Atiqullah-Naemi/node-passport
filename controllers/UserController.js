const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const { RegisterValidation, LoginValidation } = require('../validation/UserValidation')

const Register = async(req, res) => {
	const { error } = RegisterValidation(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	const emailExist = await User.findOne({ email: req.body.email })
	if (emailExist) return res.status(400).send('This email has already been taken')

	const hashedPassword = bcrypt.hashSync(req.body.password, 10)

	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: hashedPassword
	})

	try {
		const newUser = await user.save()

		res.status(200).send(newUser)
	} catch(err) {
		res.status(400).send(err)
	}
}

const Login = async(req, res) => {
	const { error } = LoginValidation(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	const userExist = await User.findOne({ email: req.body.email })
	if (!userExist) return res.status(400).send('Email is incorrect')

	// compare typed password with user password in db
	const comparePassword = await bcrypt.compare(req.body.password, userExist.password)
	if (!comparePassword) return res.status(400).send('Invalide password')

	const token = jwt.sign({ _id: userExist._id }, process.env.TOKEN_SECRET)
	res.header('auth-token', token).send(token)
}

module.exports = { Register, Login }