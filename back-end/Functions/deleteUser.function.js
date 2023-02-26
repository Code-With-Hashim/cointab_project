const { userModal } = require('../modal/Users.modal')

const deleteUser = async (req, res) => {

    try {

        await userModal.deleteMany()

        res.send({
            result: 'All User Data Successfully Delete'
        })

    } catch (error) {
        res.status(404).send({
            result: 'Failed , Something went wrong,Please try again after some time'
        })
    }
}

module.exports = { deleteUser }