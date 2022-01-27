import { rest } from "msw";
import { loggiWebUrl } from "../assignment-list";
import { waypointsListMock } from "../mocks/waypoints";

const getAssignmentList = rest.get(loggiWebUrl, (req, res, ctx) => {
  return res(ctx.json(waypointsListMock));
});

const handlers = [getAssignmentList];

export default handlers;
