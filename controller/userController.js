const userSchema = require("../module/userSchema")
module.exports = {
    createData: async (req, res) => {
        try {
            const { title, link } = req.body
            let user = await userSchema.findOne({ title: title });
            if (user) {
                return res.send({responseCode:409,responseMessage:"Data already exist", responseResult:[]})
            } else {
                const obj = {
                    title: title,
                    link: link
                }
                let saveData = await userSchema.insertMany(obj)
                if (!saveData) {
                return res.send({responseCode:400,responseMessage:"Bad request"})
                }
                return res.send({responseCode:200,responseMessage:"Data successfully uploaded", responseResult:saveData})
            }
        }
        catch (error) {
            console.log(error)
            return res.send({responseCode:501,responseMessage:"Internal server error", responseResult:error})
        }
    },

    listData: async (req, res) => {
        try {
            const { title } = req.body
            const listData = await userSchema.find({ $or: [{ "Title": title }] }).sort({ createdAt: -1 }).limit(6)
            res.send({ responseCode: 200, responseMessage: "successfully listed", responseResult: listData })
        }
        catch (error) {
            console.log(error)
            return res.send({responseCode:501,responseMessage:"Internal server error", responseResult:error})
        }
    }
}