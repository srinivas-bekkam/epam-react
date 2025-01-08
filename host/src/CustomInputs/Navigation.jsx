import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { isAuthenticated, logout } from '../services/LoginStatus';
import { useSelector } from 'react-redux';
import { cart } from '../reduxstore/ShoppingCartReducer';
import {  Navigate, useNavigate } from 'react-router-dom';
import { Link } from '@mui/material';
import { LoginContext } from '../providers/LoginContext';


export default function Navigation(props) {
  const items= useSelector((state)=>state.ShoppingCart.cart)
   // const [auth, setAuth] = React.useState(isAuthenticated());
   const [auth,setAuth]= React.useContext(LoginContext)
   console.log('auth context',auth)
    const [anchorEl, setAnchorEl] = React.useState(null);
    let navigate = useNavigate();
  
    const handleChange = (event) => {
      setAuth(event.target.checked);
    };
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const gotoCart=()=>{
      setAnchorEl(null);
      navigate("/cart")
//     props.navigate.push("/cart")

    }
    const gotoMusic=()=>{
      navigate("/albums")
    }
    const gotoProducts=()=>{
      navigate("/products")
    }
    const logoutAndRouteToLogin=()=>{
      logout()
      setAuth(false)
      navigate("/login")
    }
  return (<div className='app-navigation'>
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
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
                <MenuItem onClick={handleClose}>Profile </MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={gotoProducts}>Products</MenuItem>
                <MenuItem onClick={gotoMusic}>Music</MenuItem>
                <MenuItem   
                onClick={gotoCart} >Cart ( {items.length})</MenuItem>
                <MenuItem   
                onClick={logoutAndRouteToLogin} >Logout </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}
