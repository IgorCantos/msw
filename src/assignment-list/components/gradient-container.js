import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import { useStyles } from "../constants";

export function GradientContainer({ children }) {
  const classes = useStyles();
  return (
    <Box
      pt={2.5}
      display="flex"
      minHeight="100%"
      flexDirection="column"
      className={classes.container}
    >
      {children}
    </Box>
  );
}
GradientContainer.propTypes = { children: PropTypes.node.isRequired };
