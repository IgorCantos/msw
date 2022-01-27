import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, IconButton } from "@material-ui/core";

import HelpIcon from "@material-ui/icons/Help";
import { ReactComponent as Loggi } from "./icons/loggi.svg";
import { ReactComponent as EmergencyButton } from "./icons/emergency-button.svg";

import assignmentListHeaderStyles from "./styles";

export default function AssignmentListHeader({ displayHeaderButtons }) {
  const onFaqButtonClick = () => {};
  const onEmergencyButtonClick = () => {};
  const shouldShowBackButton = !!window.driverAppBridge?.closeActivity;

  return (
    <Box px={2.5} display="flex">
      <Grid container justify="space-between" alignItems="center">
        <Box color="white">
          <Loggi data-testid="loggi-logo" />
        </Box>

        {displayHeaderButtons && (
          <Box display="flex" alignItems="center">
            <Box mr={2.5}>
              <IconButton
                style={assignmentListHeaderStyles.faqButtonBackground}
                onClick={onFaqButtonClick}
                data-testid="faq-button"
              >
                <HelpIcon style={assignmentListHeaderStyles.faqButton} />
              </IconButton>
            </Box>

            <Box>
              <IconButton
                style={assignmentListHeaderStyles.emergencyButton}
                onClick={onEmergencyButtonClick}
                data-testid="emergency-button"
              >
                <EmergencyButton />
              </IconButton>
            </Box>
          </Box>
        )}
      </Grid>
    </Box>
  );
}

AssignmentListHeader.propTypes = {
  displayHeaderButtons: PropTypes.bool,
};

AssignmentListHeader.defaultProps = {
  displayHeaderButtons: true,
};
