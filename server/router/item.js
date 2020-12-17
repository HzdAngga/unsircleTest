const router = require('express').Router()
const ItemControl = require('../controllers/item')

router.get('/', ItemControl.view)

module.exports = router