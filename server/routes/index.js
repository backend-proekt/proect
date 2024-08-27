const Router = require('express')
const router = new Router()
const applicationRouter = require('./applicationRouter')
const directionRouter = require('./directionRouter')
const groupRouter = require('./groupRouter')
const studentRouter = require('./studentRouter')


router.use('/application', applicationRouter)
router.use('/student', directionRouter)
router.use('/direction', groupRouter)
router.use('/group', studentRouter)




module.exports = router