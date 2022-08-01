const Router = require("express");
const usersRouter = require("./src/modules/routes/usersRoutes");
const routes = Router();


routes.use(usersRouter);





module.exports = routes;