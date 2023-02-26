import {
    Box, Button, VStack,
    useDisclosure,
    useToast,
} from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { DeleteModal } from "../Components/DeleteModal"

import { fetchUser } from "../Function/fetchUser"

export const HomePage = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()
    const [loading, setLoading] = useState(false)
    const Navigate = useNavigate()


    //Sperate function for when fetch data is going on
    const fetchLoading = () => {
        loading ? toast({
            title: 'In processing.',
            description: 'Fetch User is in processing , Please wait some time',
            status: 'error',
            duration: 2000,
            position: 'top',
            isClosable: true,
        }) : fetchUser(toast, setLoading)
    }

    return (
        <Box>
            <VStack >
                <Button onClick={fetchLoading} colorScheme={'teal'}>Fetch User</Button>
                <Button onClick={onOpen} colorScheme={'red'}>Delete User</Button>
                <Button onClick={()=> Navigate("/userdetails")} colorScheme={'teal'}>Users Details</Button>
            </VStack>
            <DeleteModal isOpen={isOpen} onClose={onClose} toast={toast} />
        </Box>
    )
}