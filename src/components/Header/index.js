import { AppBar, withStyles } from "@material-ui/core";
import React from "react";

import styles from "./styles";

const Header = ({ classes }) => (
    <AppBar position="static">
        <h1 className={classes.title}>Calculator</h1>
    </AppBar>
);

export default withStyles(styles)(Header);
