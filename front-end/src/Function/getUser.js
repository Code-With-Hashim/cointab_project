export const getUser = async (page , filter) => {

    const {search , age , gender} = filter

    try {

        const userDetail = await (await fetch(`${process.env.REACT_APP_HOME_BASE_URL}/getUser?page=${page}&gender=${gender}&age=${age}&search=${search}`)).json()

        return userDetail
        
    } catch (error) {
        console.log(error)
    }
}
