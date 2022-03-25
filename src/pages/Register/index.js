import React from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

function Register() {
  // UseState form
  const [form, setForm] = React.useState({
    name: '',
    emai: '',
    username: '',
    password: '',
  })

  //   UseState Error
  const [error, setError] = React.useState({
    name: 'Name Minimal 6 Karakter',
    username: 'Username minimal 6 Karater',
    password: 'Passowrd minimal 8 karakter',
  })

  //   HandlerChange
  const handlerChange = (field, e) => {
    setError('')
    const value = e.target
    if (value.length < 6) {
      setError({ ...error, [field]: `${field} minimal 6 karakter` })
    } else {
      setError({ ...error, [field]: '' })
    }
  }

  //   handlerOnSubmit
  const handlerSubmit = (event) => {
    event.preventDefault()
    alert('Hallo')
  }

  return (
    <Box
      sx={{
        mx: '10%',
        marginTop: 2,
        maxWidth: '100%',
      }}
    >
      <form onSubmit={handlerSubmit}>
        <TextField
          onChange={handlerChange}
          margin="normal"
          fullWidth
          label="Nama"
          id="fullWidth"
          name="name"
          value={form.name}
        />
        <TextField
          onChange={handlerChange}
          margin="normal"
          fullWidth
          label="Username"
          id="fullWidth"
          name="username"
          value={form.username}
        />
        <TextField
          onChange={handlerChange}
          margin="normal"
          fullWidth
          label="Password"
          id="fullWidth"
          name="password"
          value={form.password}
        />
        <Button type="submit" variant="contained" color="success">
          Masuk{' '}
        </Button>
      </form>
    </Box>
  )
}

export default Register
