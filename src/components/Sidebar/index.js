import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

import TopBar from '../TopBar'
import Food from '../Food'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import TextField from '@mui/material/TextField'
import ButtonGroup from '@mui/material/ButtonGroup'
import Container from '@mui/material/Container'

import Button from '@mui/material/Button'
import Cart from '../Cart'

const drawerWidth = 240
const customMargin = {
  'margin-bottom': 15,
}

const customPadding = {
  padding: 10,
}

export default function Sidebar() {
  const buttons = [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
  ]
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <TopBar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, mt: 10 }}
      >
        {/* <TopBar /> */}
        <TextField
          fullWidth
          label="Search Food or Drink"
          id="fullWidth"
          margin="normal"
        />
        <ButtonGroup
          style={customMargin}
          variant="outlined"
          aria-label="outlined button group"
        >
          <Button>All</Button>
          <Button>Food</Button>
          <Button>Drink</Button>
        </ButtonGroup>

        <Food />
      </Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <Toolbar />
        <h2 className="mb-5 ml-4">
          {' '}
          <ShoppingCartIcon></ShoppingCartIcon>Cart
        </h2>
        <Divider />
        <List style={customPadding}>
          <Cart />
        </List>
      </Drawer>
    </Box>
  )
}
