import { Button, withStyles } from "@material-ui/core";

import styles from "./styles";

const CustomButton = ({
    classes,
    children,
    type,
    disabled,
    value,
    onClick,
}) => {
    return (
        <Button
            disabled={disabled}
            className={`${classes.root} ${
                type === "action" && classes.actionButton
            }`}
            value={value}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};

export default withStyles(styles)(CustomButton);
