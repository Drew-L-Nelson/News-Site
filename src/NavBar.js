import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00509d'
    },
    secondary: {
      main: '#c1121f'
    },
    common: {
      main: '#ffd500'
    },
    test: {
      main: '#003e1f'
    }
  }
});

export default function NavBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [style, setStyle] = useState("primary");

  const changeStyleRed = () => {
    setStyle("secondary");
  };

  const changeStyleBlue = () => {
    setStyle("primary");
  };

  const changeStyleYellow = () => {
    setStyle("common");
  };

  const changeStyleTest = () => {
    setStyle("test");
  };

  const handleChange = (e) => {
    setAuth(e.target.checked);
  };

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <AppBar position="static" theme={theme} color={style} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => {
              handleClose()
              changeStyleBlue()
            }}>Blue</MenuItem>

            <MenuItem onClick={() => {
              changeStyleRed()
              handleClose()
            }}>Red</MenuItem>

            <MenuItem onClick={() => {
              changeStyleYellow()
              handleClose()
            }}>Yellow</MenuItem>

            <MenuItem onClick={() => {
              changeStyleTest()
              handleClose()
            }}>Test</MenuItem>
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
