const {Item} = require('../models')

class ItemControl {
    async static view (req,res) {
        let Item = await Item.find()
        res.json(item)
    }
}
module.exports = ItemControl