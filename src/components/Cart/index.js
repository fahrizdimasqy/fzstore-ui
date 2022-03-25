import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'

import { useTheme } from '@mui/material/styles'

function Cart() {
  const customSmallButton = {
    'min-width': 5,
    height: 20,
  }
  const customMarginBottom = {
    'margin-bottom': 15,
  }
  const theme = useTheme()

  return (
    <div>
      <Card
        sx={{ display: 'flex', paddingBottom: '50' }}
        style={customMarginBottom}
      >
        <CardMedia
          component="img"
          sx={{ width: 100 }}
          image="https://img-global.cpcdn.com/recipes/d1848c61417e18b6/1200x630cq70/photo.jpg"
          alt="Live from space album cover"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              Burger
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Rp.15000
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <Button variant="contained" style={customSmallButton}>
              -
            </Button>
            <p>1</p>
            <Button variant="contained" style={customSmallButton}>
              +
            </Button>
          </Box>
        </Box>
      </Card>
      <Card sx={{ display: 'flex', padding: '50 !important' }}>
        <CardMedia
          component="img"
          sx={{ width: 100 }}
          image="https://img-global.cpcdn.com/recipes/d1848c61417e18b6/1200x630cq70/photo.jpg"
          alt="Live from space album cover"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              Burger
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Rp.15000
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'left ', pl: 1, pb: 1 }}>
            <Button variant="contained" style={customSmallButton}>
              -
            </Button>
            <p>1</p>
            <Button variant="contained" style={customSmallButton}>
              +
            </Button>
          </Box>
        </Box>
      </Card>

      <div className="mt-12">
        <p>Total : Rp. 30.000</p>
        <Button variant="contained">Checkout</Button>
      </div>
    </div>
  )
}

export default Cart
