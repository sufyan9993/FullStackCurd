import { AccountCircle, Money } from "@mui/icons-material"
import { Button, FormControl, InputAdornment, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function AddUser() {
  const navigate = useNavigate()
  const params = useParams()
  const [FormValues, setFormValues] = useState({
    Name: '',
    Age: '',
    Address: '',
  })



  const submitHandler = async (e) => {
    e.preventDefault()
    console.log('submitted', FormValues);
    params.id ? await axios.put(`http://localhost:8000/UpdateEmployee/${params.id}`, FormValues)
      : await axios.post('http://localhost:8000/AddEmployee', FormValues)
    navigate('/')
  }

  const getUserDetails = async (id) => {
    const { data } = await axios.get(`http://localhost:8000/Employee/${id}`)

    setFormValues({
      Name: data.Name,
      Age: data.Age.toString(),
      Address: data.Address
    })
  }
  useEffect(() => {
    params.id && getUserDetails(params.id)
  }, [])
  return (
    <Box width={'500px'} margin="20px auto" textAlign='center' >
      <AccountCircle fontSize="large" />
      <Typography component={'h1'} variant="h4" >Add Employee</Typography>
      <Stack
        component={'form'}
        onSubmit={submitHandler}
        direction={'column'}
        spacing={3}
        width={'70%'}
        margin='auto'>

        <TextField
          label='Name'
          required
          variant='standard'
          value={FormValues.Name} onChange={(e) => setFormValues({ ...FormValues, Name: e.target.value })} />

        <TextField
          label='Age'
          type={'number'}
          required
          variant='standard'
          value={FormValues.Age} onChange={(e) => setFormValues({ ...FormValues, Age: e.target.value })}
        />

        <TextField
          label='Address'
          required
          variant='standard'
          value={FormValues.Address}
          onChange={(e) => setFormValues({ ...FormValues, Address: e.target.value })}
        />
        <Button type="submit" variant="contained" fullWidth>Submit</Button>
        <Button variant='outlined' fullWidth onClick={() => navigate('/')}>Cancel</Button>
      </Stack>
    </Box>
  )
}

export default AddUser