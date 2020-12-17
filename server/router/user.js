const router = require('express').Router()
const UserControl = require('../controllers/user')

router.get('/', UserControl.view)
router.post('/login', UserControl.login)
router.post('/', UserControl.add)
router.get('/:id', UserControl.viewById)
router.put('/:id', UserControl.edit)

module.exports = router