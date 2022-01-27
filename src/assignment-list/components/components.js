import React from "react";
import PropTypes from "prop-types";

import { Box, Typography } from "@material-ui/core";

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

export function ContainerHeaderInfo({ children }) {
  return (
    <Box
      px={2.5}
      pb={5}
      mt={30}
      display="flex"
      alignItems="flex-end"
      color="#FFFFFF"
    >
      {children}
    </Box>
  );
}
ContainerHeaderInfo.propTypes = { children: PropTypes.node.isRequired };

export function OverlayingCard({ children }) {
  const classes = useStyles();
  return (
    <Box pt={3.5} flexGrow={1} bgcolor="#FFFFFF" className={classes.card}>
      <Box display="flex" justifyContent="center">
        <Box className={classes.tab} />
      </Box>
      {children}
    </Box>
  );
}

OverlayingCard.propTypes = { children: PropTypes.node.isRequired };

export function ProgressInfo({
  packages,
  pickups,
  assignmentsWaypoints,
  updateList,
}) {
  const totalPickups = pickups.length;
  const totalPkgs = packages.length;

  const totalActivities = totalPkgs + totalPkgs + assignmentsWaypoints.length;

  const noActivity = "No momento, você não tem nenhuma atividade para fazer.";
  const withActivity = `Você tem ${totalActivities} ${
    totalActivities === 1 ? "atividade" : "atividades"
  } para fazer.`;

  return (
    <>
      <Box>
        <Box display="flex" alignItems="center" justifyContent="left">
          {updateList}
        </Box>
        <Box pb={1.5} color="#F3FCFF">
          <Typography variant="h4">
            {totalActivities > 0 ? withActivity : noActivity}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
