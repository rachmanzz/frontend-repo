import {Router as expressRoute} from "express";
import handleCreateUser from "./handlers/handleCreateUser";
import handleUpdateUser from "./handlers/handleUpdateUser";
import handleGetUser from "./handlers/handleGetUser";
import handleGetAllUser from "./handlers/handleGetAllUser";
import handleDeleteUser from "./handlers/handleDeleteUser";
import authBearer from "./middleware/authBearer";

const route = expressRoute();
route.use(authBearer);

route.post("/user", ...handleCreateUser);
route.put("/user/:doc_id", ...handleUpdateUser);
route.get("/user/:doc_id", handleGetUser);
route.delete("/user/:doc_id", handleDeleteUser);
route.get("/users", handleGetAllUser);

export default route;
