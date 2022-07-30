import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { StaticImage } from "gatsby-plugin-image";
import "../../scss/header.scss";


const Header = (props) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box id="header-container" sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar id="header-toolbar">
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleMenu}>
                            <MenuIcon />
                    </IconButton>
                    {props.children}
                    <StaticImage id="title-logo" src="../../images/logo.png" alt="Time 4 OT logo" height={50} width={150} placeholder="none" />
                    </Toolbar>
                    <div>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}>
                                <MenuItem onClick={handleClose}>
                                    <a href="https://forms.gle/sQGbyfJk3KhdLSDx8" target="_blank">
                                        Feedback (Opens in new tab)
                                    </a>
                                </MenuItem>
                        </Menu>
                    </div>
            </AppBar>
        </Box>
    );
}

export default Header;
