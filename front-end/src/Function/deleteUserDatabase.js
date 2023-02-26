export const deleteUserDatabase = async (toast , onClose) => {
    try {

        let res = await fetch(`${process.env.REACT_APP_HOME_BASE_URL}/deleteUser`, {
            method: 'DELETE'
        })

        let data = await res.json()

        //alert showing for delete Data Successfully
        toast({
            title: 'Database Delete.',
            description: data.result,
            status: 'error',
            duration: 2000,
            position: 'top',
            isClosable: true,
        })
        onClose()


    } catch (error) {
        console.log(error) // handle the error
    }
}