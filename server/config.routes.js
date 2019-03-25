const title  = require('./common/title')
const index = require('./routes/front')
const admin = require('./routes/admin')
const ERROR404 = require('./routes/ERROR404')
const ERROR500 = require('./routes/ERROR500')

module.exports = (app) => {
	app.use(async (ctx, next) => {
		let _render = ctx.render,
			path    = ctx.request.url.replace(/\/{2,}/g, '/').replace(/\/$/, '').replace(/\?.*/, '')
		ctx.render = function(){
			if (arguments.length === 1) {
				arguments.length = 2
				arguments[1] = {}
			}
			arguments[1].title  = title[path || '/']
			return _render.apply(this, arguments)
		}
		await next();
	});

	
	app.use(index.routes(), index.allowedMethods())
	app.use(admin.routes(), admin.allowedMethods())
	app.use(ERROR404.routes(), ERROR404.allowedMethods())
	app.use(ERROR500.routes(), ERROR500.allowedMethods())
}