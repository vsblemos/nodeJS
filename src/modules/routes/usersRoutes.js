const usersRoutes = router();
const {CreateUserController} = require("./src/modules/users/controllers/CreateUserController")

const CreateUserController = new CreateUserController();
usersRoutes.post("/users", CreateUserController.handle);
usersRoutes.get("/users", CreateUserController.list);




module.exports = usersRoutes
