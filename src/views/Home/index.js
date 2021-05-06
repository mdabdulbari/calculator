import { withStyles } from "@material-ui/core";
import React from "react";

import Calculator from "../../components/Calculator";
import Header from "../../components/Header";
import styles from "./styles";

const Home = ({ classes }) => {
    return (
        <div>
            <Header />
            <section className={classes.container}>
                <Calculator />
            </section>
        </div>
    );
};

export default withStyles(styles)(Home);
