const front = require('./routes/front')
const admin = require('./routes/admin')
const ERROR404 = require('./routes/ERROR404')
const ERROR500 = require('./routes/ERROR500')

module.exports = (app) => {
	app.use(front.routes(), front.allowedMethods())
	app.use(admin.routes(), admin.allowedMethods())
	app.use(ERROR404.routes(), ERROR404.allowedMethods())
	app.use(ERROR500.routes(), ERROR500.allowedMethods())
}