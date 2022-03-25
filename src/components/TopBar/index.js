// import * as React from 'react'
import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import { Link } from 'react-router-dom'
import Stack from '@mui/material/Stack'

const pages = ['Products', 'Pricing', 'Blog']
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

const TopBar = () => {
  const guess = false

  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  const drawerWidth = 240
  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        mr: `${drawerWidth}px`,
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Food Market
        </Typography>
        {guess ? (
          <div>
            <Link to="/login">
              <Button color="inherit">Login</Button>
            </Link>
            <Link to="/register">
              <Button color="inherit">Register</Button>
            </Link>
          </div>
        ) : (
          <div style={{ display: 'flex' }}>
            <Avatar
              alt="Remy Sharp"
              src="https://fahrizdimasqy.github.io/dist/img/fahriz-pp.png"
            />

            <h3 className="ml-2 mt-2">Fahriz Dimasqy</h3>
          </div>
        )}
      </Toolbar>
    </AppBar>
  )
}
export default TopBar
