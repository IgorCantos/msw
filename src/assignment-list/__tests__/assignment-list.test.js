import { screen, render } from "@testing-library/react";
import { waypointsListMock } from "../../mocks/waypoints";
import AssignmentList, { loggiWebUrl } from "..";
import server from "../../MSW/server";
import { rest } from "msw";

describe("Assignment List", () => {
  it("Correctly renders the waypoints list", async () => {
    // server.use(
    //   rest.get(loggiWebUrl, async (req, res, ctx) => {
    //     return res(ctx.status(500), ctx.json({ message: "erro" }));
    //   })
    // );

    render(<AssignmentList />);

    await screen.findByText(
      `${waypointsListMock[0].address.street} ${waypointsListMock[0].address.suite}`
    );
  });
});
