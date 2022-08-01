const Router = require("express");
//const transactionRoutes = require("./src/modules/Routes/transactionRoutes")
const routes = Router();


routes.get("/users", (request,response)=>{
    response.json({ message: "user route" });
});




module.exports = routes;