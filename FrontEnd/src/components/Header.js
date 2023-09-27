import React, {useState} from 'react';
import { AppBar, Toolbar, Tab, Tabs, Typography} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {NavLink} from 'react-router-dom';

const Header = () => {
    const [value, setValue] = useState();
  return (
      <div>
          <AppBar sx={{backgroundColor:'black'}} position="sticky">
              <Toolbar>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                      <MenuBookIcon />
                      <Typography variant="h6" sx={{ marginLeft: '8px' }}>
                          BookVerse
                      </Typography>
                  </div>
                  <Tabs 
                  sx={{ml:'auto'}}
                  textColor="inherit" 
                  indicatorColor="secondary" 
                  value={value} 
                  onChange={(e,val)=>setValue(val)}>
                        <Tab LinkComponent={NavLink} to="/" label="Home"/>
                        <Tab LinkComponent={NavLink} to="/add" label="Add Book"/>
                        <Tab LinkComponent={NavLink} to="/books" label="Books"/>
                        <Tab LinkComponent={NavLink} to="/cart"  label="Cart"/>
                        <Tab LinkComponent={NavLink} to="/myprofile/:id"  label="Profile"/>
                  </Tabs>
              </Toolbar>
          </AppBar>
      </div>
  )
};

export default Header;