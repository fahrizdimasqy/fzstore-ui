import * as React from 'react'
// import "../../upkit/dist/style.min.css";
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
export default function Login() {
  const [form, setForm] = React.useState({
    username: '',
    password: '',
  })
  const [error, setError] = React.useState({
    username: 'Username minimal 6 karakter',
    password: 'Password minimal 8 karakter',
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    if (error['username'].length > 0) {
      alert(error['username'])
    } else if (error['password'].length > 0) {
      alert(error['password'])
    } else {
      alert('validation success')
    }
  }

  // const handlerChange = (field, e) => {
  //   setError('')
  //   const value = e.target.value
  //   if (value.length < 8) {
  //     setError({ ...error, [field]: `${field} minimal 6 karakter` })
  //   } else {
  //     setError({ ...error, [field]: '' })
  //   }
  //   setForm({ ...form, [field]: value })
  // }

  const handlerChange = (event) => {
    const { name, value } = event.target
    setForm((prevValue) => {
      return {
        // copy objek dengan value sebelumnya
        ...prevValue,
        [name]: value, //ganti dengan berdasarkan nama field dengan value yang sekarang
      }
    })
  }

  return (
    <Box
      sx={{
        marginTop: 8,
        mx: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <form onSubmit={handleSubmit}>
        <Card>
          <CardContent>
            <h5 className="primary">Halaman Login</h5>

            {error.username}

            <TextField
              fullWidth
              label="username"
              id="fullWidth"
              margin="normal"
              name="username"
              onChange={handlerChange}
              value={form.username}
            />
            {error.password}
            <TextField
              fullWidth
              label="Masukan Katasandi"
              id="fullWidth"
              margin="normal"
              name="password"
              onChange={handlerChange}
              value={form.password}
              type="password"
            />
            <Button type="submit" variant="contained" color="success">
              Masuk{' '}
            </Button>
            <p>
              Belum punya akun? <a href="/register">Daftar</a>{' '}
            </p>
          </CardContent>
        </Card>
      </form>
    </Box>
  )
}
