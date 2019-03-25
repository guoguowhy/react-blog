const router = require('koa-router')()

router.all('*', async(ctx, next) => {
    ctx.response.status = 500;
    await ctx.render('ERROR500',{
        title : 'ERROR500'
    });
})

module.exports = router
