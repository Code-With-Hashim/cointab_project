import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box,
    Button,
    Input,
    HStack,
    Select,
} from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { GetLoading } from '../Components/getLoading'
import { getUser } from '../Function/getUser'


const filterDetail = {
    search : '',
    age : '',
    gender : ''
}


export const UserDetails = () => {

    const [userData, setUserData] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [params , setSearchParams] = useSearchParams(page)
    const [filterForm , setfilterForm] = useState(filterDetail)
    const debounceId = useRef(null)

    useEffect(() => {

        getUser(page , filterForm).then((res) => {
            setUserData(res.results)
            setLoading(false)
        }).catch((err) => {
            setLoading(false)
            console.log(err)
        })
        
    }, [page, filterForm])


    if (loading) {
        return <GetLoading />
    }


    function DateWise(formate) {
        const DateList = new Date(formate)

        const date = DateList.getDate()
        const month = DateList.getMonth()
        const year = DateList.getFullYear()

        return `${date}-${month + 1}-${year}`

    }

    const handelPagination =  (val) => {

       setPage((page) => page+val)

       
    }


    const debouncing = ({target}) => {
        const {name , value} = target


        if(name === 'search')  {

            debounceId.current && clearTimeout(debounceId.current)

           debounceId.current = setTimeout(() => {
                setfilterForm({...filterForm , [name] : value})
            }, 1000)
        } else {
            setfilterForm({...filterForm , [name] : value})
        }

        
    }



    return (
        <Box>
            <HStack m='5'>
                <Input name='search'  onChange={debouncing} placeholder='Enter Name or Email of User' />
                <Select name='gender' onChange={debouncing} placeholder='Sort by Gender'>
                    <option value={'male'}>Male</option>
                    <option value={'female'}>Female</option>
                </Select>
                <Select name='age' onChange={debouncing} placeholder='Sort by Age'>
                    <option value={'asc'}>Low to High</option>
                    <option value={'desc'}>High to Low</option>
                </Select>
            </HStack>
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

                        {
                            userData && userData.map((i) => (
                                <Tr>
                                    <Td>{i.name.title} {i.name.first} {i.name.last}</Td>
                                    <Td>{i.gender}</Td>
                                    <Td isNumeric>{i.dob.age}</Td>
                                    <Td>{DateWise(i.dob.date)}</Td>
                                    <Td>{i.email}</Td>
                                    <Td>{i.location.country}</Td>
                                    <Td>{i.phone}</Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Gender</Th>
                            <Th isNumeric>Age</Th>
                            <Th>D.O.B</Th>
                            <Th>Email</Th>
                            <Th>Country</Th>
                            <Th>Phone</Th>

                        </Tr>
                    </Tfoot>
                </Table>
                
            </TableContainer>
            <Box  textAlign={'center'} display='flex' m='5' gap='5' justifyContent={'center'}>
                    <Button onClick={()=>handelPagination(-1)} colorScheme={'teal'}>Prev</Button>
                     <Button colorScheme={'black'} variant={'outline'}>{page}</Button>
                    <Button onClick={()=>handelPagination(+1)} colorScheme={'teal'}>Next</Button>
                </Box>
        </Box>
    )
}