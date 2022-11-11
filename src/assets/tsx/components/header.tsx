import * as React from 'react';
import { Link } from "gatsby";
import "../../scss/header.scss";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { StaticImage } from "gatsby-plugin-image";
import Toolbar from '@mui/material/Toolbar';
import { OutboundLink } from "gatsby-plugin-google-gtag"


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
                    <Link to="/game-list">
                        <StaticImage id="title-logo" src="../../images/logo.png" alt="Time 4 OT logo" height={70} width={150} placeholder="blurred" />
                    </Link>
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
                                <OutboundLink href="https://wow.boomlearning.com/store/authorId/RtDwy8TZPrPhwd2pE/?collection=Decks&keyword=OT%20time&sort=score&order=-1" target="_blank">Boom Cards</OutboundLink>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <OutboundLink href="https://www.teacherspayteachers.com/Sellers-Im-Following/Add/Time4ot" target="_blank">Teachers Pay Teachers</OutboundLink>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <OutboundLink href="https://blog.time4ot.com/book-recommendations/" target="_blank">Recommended Books</OutboundLink>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <OutboundLink href="https://blog.time4ot.com/school-based/" target="_blank">Recommended Supplies</OutboundLink>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <OutboundLink href="https://forms.gle/sQGbyfJk3KhdLSDx8" target="_blank">
                                    Leave us some feedback!
                                </OutboundLink>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <OutboundLink href="mailto:time4ot@therapysecure.com" target="_blank">Send us an email</OutboundLink>
                            </MenuItem>
                             <MenuItem onClick={handleClose}>
                                <OutboundLink href="https://blog.time4ot.com/" target="_blank">Interventions</OutboundLink>
                            </MenuItem>
                   </Menu>
                </div>
            </AppBar>
        </Box>
    );
}

export default Header;
