import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import logo from './Image/logo.jpg';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List className='bg-dark text-white'>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="All Bookmarks" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/DesignInspiration">
            <ListItemText primary="Design Inspiration" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/DesignNews">
            <ListItemText primary="Design News" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Design System" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="YouTube Channels" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Design Podcasts" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Free UI resources" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Free Icons" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Free illustrations" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Design Community" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Designer Lists" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Logo Maker Tools" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="MockUp Tools" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Image Optimization" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Color Tool" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Gradient Tools" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Stock photos" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Stock Videos" />
          </ListItemButton>
        </ListItem><ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Music & Sound" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Learn Design<" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Accessibility" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Design Tools" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Prototyping tools" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Animation Tools" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Wireframing Tools" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Collaboration Tools" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Typography" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Backgrounds, patterns" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Design Books" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Bookmarks manager" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Market places" />
          </ListItemButton>
        </ListItem>

      </List>
    </Box>
  );

  return (
    <div>
      <header className="top-navbar d-lg-none d-md-none d-sm-block">
        <nav className="navbar bg-dark text-white d-flex justify-content-between align-items-center p-3">
          
          <Button className="color-white" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </Button>
          <img src={logo} className="rounded-circle" style={{ width: '50px' }} alt="logo" />
          <h2 className="logo mb-0 d-sm-block fs-5">Suggest Us</h2>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </nav>
      </header>
    </div>
  );
}
