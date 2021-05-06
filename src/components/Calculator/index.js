import { Card, Grid, Typography, withStyles } from "@material-ui/core";
import React, { useState } from "react";

import { KEY_TYPES } from "../../utils/constants";
import { evaluate } from "../../utils/helpers";
import CustomButton from "../CustomButton";

import styles from "./styles";

const Home = ({ classes }) => {
    const [evaulatedExpression, setEvaluatedExpression] = useState("");
    const [expression, setExpression] = useState("");
    const [result, setResult] = useState(0);

    const getCustomBox = (key, props) => (
        <Grid xs={3} className={classes.buttonContainer}>
            <CustomButton {...props} value={key} onClick={handleKeyPress}>
                <span>{key}</span>
            </CustomButton>
        </Grid>
    );

    const handleKeyPress = (e) => {
        const { value } = e.currentTarget;
        let keyToAppend;
        if (result) {
            setResult("");
        }
        if (value === "=") {
            handleEquals();
            return;
        }
        if (value === "CE") {
            keyToAppend = "";
            setResult(0);
            setEvaluatedExpression("");
        } else if (value === "DEL") {
            keyToAppend = expression.slice(0, -1);
        } else {
            keyToAppend = expression + value;
        }
        setExpression(keyToAppend);
    };

    const handleEquals = () => {
        setResult(evaluate(expression));
        setEvaluatedExpression(expression);
        setExpression("");
    };

    return (
        <Card className={classes.calculator}>
            <div className={classes.resultContainer}>
                <Typography align="right">
                    {evaulatedExpression || "--"}
                </Typography>
                <Typography align="right" className={classes.result}>
                    {result ? result : expression === "" ? "0" : expression}
                </Typography>
            </div>
            <div>
                <Grid container>
                    {getCustomBox("(")}
                    {getCustomBox(")")}
                    {getCustomBox("CE")}
                    {getCustomBox("/", { type: KEY_TYPES.action })}
                </Grid>
                <Grid container>
                    {getCustomBox(7)}
                    {getCustomBox(8)}
                    {getCustomBox(9)}
                    {getCustomBox("*", { type: KEY_TYPES.action })}
                </Grid>
                <Grid container>
                    {getCustomBox(4)}
                    {getCustomBox(5)}
                    {getCustomBox(6)}
                    {getCustomBox("-", { type: KEY_TYPES.action })}
                </Grid>
                <Grid container>
                    {getCustomBox(1)}
                    {getCustomBox(2)}
                    {getCustomBox(3)}
                    {getCustomBox("+", { type: KEY_TYPES.action })}
                </Grid>
                <Grid container>
                    {getCustomBox(0)}
                    {getCustomBox(".")}
                    {getCustomBox("DEL")}
                    {getCustomBox("=")}
                </Grid>
            </div>
        </Card>
    );
};

export default withStyles(styles)(Home);
