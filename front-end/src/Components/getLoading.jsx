import {
    Skeleton, SkeletonCircle, SkeletonText, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer
} from '@chakra-ui/react'


export const GetLoading = () => {
    return (
        <Skeleton>
            <TableContainer p='5'>
                <Table colorScheme='teal'>
                    <TableCaption>All User Data</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Gender</Th>
                            <Th isNumeric>Age</Th>
                            <Th>D.O.B</Th>
                            <Th>Email</Th>
                            <Th>Country</Th>
                            <Th>Phone</Th>

                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td isNumeric>25.4</Td>
                        </Tr>
                        <Tr>
                            <Td>feet</Td>
                            <Td>centimetres (cm)</Td>
                            <Td isNumeric>30.48</Td>
                        </Tr>
                        <Tr>
                            <Td>yards</Td>
                            <Td>metres (m)</Td>
                            <Td isNumeric>0.91444</Td>
                        </Tr>
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>To convert</Th>
                            <Th>into</Th>
                            <Th isNumeric>multiply by</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </Skeleton>
    )
}