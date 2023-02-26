
export const fetchUser = async (toast , setLoading) => {

    setLoading(true) // when its data is fetching loading will come true
    try {
        const res = await fetch(`${process.env.REACT_APP_HOME_BASE_URL}/fetchUser`, {
            method: "POST"
        })
        const success = await res.json()

        toast({
            title: 'Database Delete.',
            description: success.result,
            status: 'success',
            duration: 2000,
            position: 'top',
            isClosable: true,
        })
        setLoading(false) // when fetching data completed it will become false
        
    } catch (error) {
        console.log(error)
    }
}