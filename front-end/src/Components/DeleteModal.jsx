import {
    Button, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react"
import { deleteUserDatabase } from "../Function/deleteUserDatabase"



export const DeleteModal = ({isOpen , onClose , toast}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Delete Confirmation</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Are you sure. You want to delete all Database ?
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button onClick={() => deleteUserDatabase(toast, onClose)} colorScheme='red' variant='ghost'>Confirm Delete</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}