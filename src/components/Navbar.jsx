import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import HomeIcon from "@material-ui/icons/Home";
import CodeIcon from "@material-ui/icons/Code";
import InfoIcon from "@material-ui/icons/Info";
import DrawerItem from "./DrawerItem";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    navbar: {
        background: "rgb(57, 57, 57)",
    },
    list: {
        width: 250,
    },
    fullList: {
        width: "auto",
    },
}));

const Navbar = () => {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
            <div className={classes.root}>
                <AppBar position="static" className={classes.navbar}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                        >
                            <GitHubIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Covid-19 Tracker
                        </Typography>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={() => {
                                setDrawerOpen(true);
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <Drawer
                    anchor={"right"}
                    open={drawerOpen}
                    onClose={() => {
                        setDrawerOpen(false);
                    }}
                >
                    <List className={classes.list}>
                        <DrawerItem
                            onClick={() => {
                                setDrawerOpen(false);
                            }}
                            text="Home"
                            icon={<HomeIcon />}
                            to="/"
                        />
                        <DrawerItem
                            onClick={() => {
                                setDrawerOpen(false);
                            }}
                            text="Contribute"
                            icon={<CodeIcon />}
                            to="/contribute"
                        />
                        <DrawerItem
                            onClick={() => {
                                setDrawerOpen(false);
                            }}
                            text="Info"
                            icon={<InfoIcon />}
                            to="/info"
                        />
                        <DrawerItem
                            onClick={() => {
                                setDrawerOpen(false);
                            }}
                            text="Indian Cases"
                            icon={<LocationOnIcon />}
                            to="/indian-cases"
                        />
                    </List>
                </Drawer>
            </div>
        </>
    );
};

export default Navbar;
