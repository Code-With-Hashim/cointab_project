import { Flex, Box, Heading, Spacer, ButtonGroup, Button } from "@chakra-ui/react"

export const Navbar = () => {
    return (
        <Flex  bgColor={'teal'} mb='5' alignItems='center' gap='2' >
            <Box p='5'  w='100%'>
                <Heading size='lg'>Coin Tab</Heading>
            </Box>
            <Spacer />
        </Flex >
    )
}