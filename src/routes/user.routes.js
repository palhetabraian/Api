const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const userRoutes = Router();

function myMiddleware(request, response, next) {
  console.log("voce passou pelo middleware");

  if (!request.body.isAdmin) {
    return response.json({ message: "user unauthorized" });
  }

  next();
}

const usersController = new UsersController();

userRoutes.post("/", myMiddleware, usersController.create);

module.exports = userRoutes;
