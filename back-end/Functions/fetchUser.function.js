const { userModal } = require('../modal/Users.modal')




const fetchUser = async (req, res) => {

    const bulk = Math.floor(Math.random() * (100 - 50 + 1)) + 50; // random number generator for bulk number of amount

    try {
        
        const userData = await (await fetch(`https://randomuser.me/api/?results=${bulk}`)).json()

        await userModal.insertMany(userData.results)

        res.send({
            result : 'User Data has been added successfully'
        })


    } catch (error) {
        console.log(error)
        res.status(404).send({
            error : 'Something went wrong please try again'
        })
    }
   
}

module.exports = {fetchUser}