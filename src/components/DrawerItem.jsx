import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";

const DrawerItem = ({ onClick, text, icon, to }) => {
    return (
        <div onClick={onClick}>
            <Link to={to}>
                <ListItem button>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            </Link>
        </div>
    );
};

export default DrawerItem;
