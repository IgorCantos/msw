import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import AssignmentListHeader from "./components/assignment-list-header";
import { GradientContainer } from "./components/gradient-container";
import LoadingState from "./components/loading-state";
import AssignmentWaypointRow from "./components/assignment-waypoint-row";
import {
  ContainerHeaderInfo,
  OverlayingCard,
  ProgressInfo,
} from "./components/components";

export const loggiWebUrl = "https://jsonplaceholder.typicode.com/users";

export default function AssignmentList() {
  const [waypoints, setWaypoints] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => fetchList(), []);

  const fetchList = async () => {
    setLoading(true);
    const response = await fetch(loggiWebUrl);
    const waypoints = await response.json();
    setWaypoints(waypoints);
    setLoading(false);
  };

  return (
    <GradientContainer>
      <AssignmentListHeader displayHeaderButtons={!loading} />

      {loading && <LoadingState />}

      <ContainerHeaderInfo>
        <Box>
          <ProgressInfo
            packages={[]}
            pickups={[]}
            updateList={[]}
            assignmentsWaypoints={waypoints}
          />
        </Box>
      </ContainerHeaderInfo>

      <OverlayingCard>
        {waypoints &&
          waypoints.map((waypoint) => (
            <AssignmentWaypointRow
              key={waypoint.id}
              assignmentWaypoint={waypoint}
            />
          ))}
      </OverlayingCard>
    </GradientContainer>
  );
}
