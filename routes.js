const Router = require("express");
//const transactionRoutes = require("./src/modules/Routes/transactionRoutes")
const routes = Router();

const users = []

routes.get("/users", (request,response)=>{
    response.json({ message: "user route" });
});

routes.post("/users", (request,response)=>{
    const name = request.body.name;
    const username = request.body.username;
    const email = request.body.email;

    const user = {name, username,email}

    users.push(user);

    return responde.json({user});
});



module.exports = routes;