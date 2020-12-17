const {User} = require('../models')

class UserControl {
    static async login (req,res) {
        let {email,password} = req.body
        let user = await User.findOne({
            where: {email,password}
        })
        res.json(user)
    }
    static async viewById (req,res) {
        let id = +req.params.id
        let user = await User.findByPk(id)
        res.json(user)
    }
    static async view (req,res) {
        let user = await User.findAll()
        res.json(user)
    }
    static async add (req,res) {
        let {name,email,password,userPolicies,itemPolicies} = req.body
        let user = await User.create({name,email,password,userPolicies,itemPolicies})
        res.json(user)
    }
    static async edit (req,res) {
        let id = +req.params.id
        let {name,email,password,userPolicies,itemPolicies} = req.body
        let number = await User.update({name,email,password,userPolicies,itemPolicies}, {
            where: {
                id
            }
        })
        res.json(number)
    }
}
module.exports = UserControl