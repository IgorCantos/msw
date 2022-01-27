import { setupServer } from "msw/node";
import handlers from "./handlers";

const server = new setupServer(...handlers);

export default server;
