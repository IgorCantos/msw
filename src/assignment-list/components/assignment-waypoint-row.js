import React from "react";
import {
  ListItem,
  ButtonBase,
  Box,
  Typography,
  Avatar,
} from "@material-ui/core";
import ArrowIcon from "@material-ui/icons/NavigateNext";

function AssignmentWaypointRow({ assignmentWaypoint }) {
  const addressTitle = `${assignmentWaypoint.address.street} ${assignmentWaypoint.address.suite}`;
  const addressBody = `${assignmentWaypoint.address.city} ${assignmentWaypoint.address.zipcode}`;

  return (
    <Box>
      <ListItem
        divider={!!assignmentWaypoint}
        alignItems="flex-start"
        style={{ padding: 0 }}
      >
        <ButtonBase onClick={() => {}} style={{ width: "100%" }}>
          <Box display="flex" flexDirection="column" flexGrow={1} p={2.5}>
            <Box display="flex">
              <Box
                mr={3}
                style={{
                  backgroundImage: "linear-gradient(135deg, #00BAFF, #007CFF)",
                }}
                clone
              >
                <Avatar data-testid="index-icon">
                  <Box color="#FFFFFF" fontSize={12} fontWeight={900}>
                    {assignmentWaypoint.id}
                  </Box>
                </Avatar>
              </Box>

              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                width="100%"
              >
                <Box color="#2E3545" textAlign="left">
                  <Typography>
                    <Box
                      component="span"
                      display="inline"
                      color="#00BAFF"
                      fontWeight="bold"
                      textAlign="center"
                    >
                      Entregar hoje
                    </Box>
                  </Typography>
                  <Typography variant="subtitle1">{addressTitle}</Typography>
                  <Box
                    component="div"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    whiteSpace="nowrap"
                    fontSize={14}
                    maxWidth={205}
                    mt={1}
                  >
                    <Box component="span">{addressBody}</Box>
                  </Box>
                </Box>
                <Box mt={1.25} color="#00BAFF">
                  <ArrowIcon />
                </Box>
              </Box>
            </Box>
          </Box>
        </ButtonBase>
      </ListItem>
    </Box>
  );
}

export default AssignmentWaypointRow;
