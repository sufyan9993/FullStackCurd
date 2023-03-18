import { Delete, Edit } from "@mui/icons-material"
import { Box, Button, Modal, Stack, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Home() {
    const [isLoading, setIsLoading] = useState(false)
    const [usersData, setUsersData] = useState([])
    const [userId, setUserId] = useState('')
    const [popUpOpen, setPopUpOpen] = useState(false)
    const navigate = useNavigate()

    const FetchUserData = async () => {
        setIsLoading(true)
        const { data } = await axios.get('http://localhost:8000/AllEmployees')
        setUsersData(data)
        // console.log(data);
        setIsLoading(false)
    }

    const DeleteUserHandler = (id) => {
        setUserId(id)
        setPopUpOpen(true)
    }
    const DeleteUser = async () => {
        await axios.delete(`http://localhost:8000/DeleteEmployee/${userId}`)
        FetchUserData()
    }
    useEffect(() => {
        FetchUserData()
    }, [])

    return (
        <Stack spacing={4} alignItems='center' margin={'40px'}>
            <Button variant="contained" onClick={() => navigate('AddEmployee')}>Add User</Button>
            <Modal open={popUpOpen} onClose={() => setPopUpOpen(false)}>
                <Stack borderRadius={'10px'} style={{ outline: 'none' }} spacing={3} padding='15px' margin={'30vh auto'} width="400px" bgcolor='white' >
                    <Typography>
                        Are you sure you want to permenantly delete the user?
                    </Typography>
                    <Stack direction='row-reverse' spacing={1}>
                        <Button variant='outlined' onClick={() => setPopUpOpen(false)}>No</Button>
                        <Button variant='contained' color='info' onClick={() => {
                            DeleteUser()
                            setPopUpOpen(false)
                        }}>Yes</Button>
                    </Stack>
                </Stack>
            </Modal>
            {isLoading ? <h1>Loading...</h1> : (
                <Box component={'table'} width='80%' bgcolor={'whiteSmoke'}>
                    <TableHead>
                        <TableRow >
                            <TableCell align="center">SR.NO.</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Age</TableCell>
                            <TableCell align="center">Address</TableCell>
                            <TableCell align="center" >Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            usersData.map((item, i) => {
                                return (
                                    <TableRow key={i}>
                                        <TableCell align='center'>{i + 1}</TableCell>
                                        <TableCell align='center'>{item.Name}</TableCell>
                                        <TableCell align='center'>{item.Age}</TableCell>
                                        <TableCell align='center'>{item.Address}</TableCell>
                                        <TableCell align='center' >
                                            <Stack direction={'row'} justifyContent='center' >
                                                <Button onClick={() => DeleteUserHandler(item._id)}><Delete /></Button>
                                                <Button onClick={() => navigate(`/EditEmployee/${item._id}`)}><Edit /></Button>
                                            </Stack>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Box>
            )}
        </Stack >
    )
}

export default Home