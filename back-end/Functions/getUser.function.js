const { userModal } = require("../modal/Users.modal")

const getUser = async (req, res) => {
    const { page, gender, age, search } = req.query

    const userDetail = await userModal.find(gender && search ? // we check that gender and search if both are exist than perform this action
        ({
            gender, $or: [
                { 'name.first': { $regex: search, $options: 'i' } }, // $regex for search the name  and option for if case is insensitive
                { 'name.last': { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: 'i' } }]
        }) : // // $regex for search the email  and option for if case is insensitive
        gender || search ? { // check if in the both condition if gender or search been exist than perform this action
            $or: [  // or operator using for search any both condition
                { gender },
                search ? { $or: [{ 'name.first': { $regex: search, $options: 'i' } }, { 'name.last': { $regex: search, $options: 'i' } }, { email: { $regex: search, $options: 'i' } }] } : {}
            ]
        } : {})
        .limit(10) // for the limit of response
        .skip(10 * (page ? page - 1 : 0)) // for using the pagination
        .sort(age && age!== "" ? { 'dob.age': age } : {}) // age sorting filter


    res.send({
        results: userDetail,
        info: {
            results: userDetail.length,
            page: page ? +page : 1
        }
    })

    try {

    } catch (error) {
        console.log(error)
        res.status(404).send({
            result: "Failed , something went wrong please try again "
        })
    }
}

module.exports = { getUser }