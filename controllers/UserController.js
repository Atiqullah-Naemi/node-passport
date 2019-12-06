const bcrypt = require('bcrypt')
const User = require('../models/User')
const { RegisterValidation } = require('../validation/UserValidation')

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

module.exports = { Register }