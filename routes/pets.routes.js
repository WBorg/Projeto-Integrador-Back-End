const petsRoutes = require('express').Router();
const Pets = require('../controllers/Pets.controller');


petsRoutes.get("/all", Pets.findAll);
petsRoutes.get("/all/page/:page", Pets.findAllPages);
petsRoutes.get("/show/:id", Pets.findOne);
petsRoutes.post("/create",Pets.create);
petsRoutes.put("/update", Pets.update);
petsRoutes.delete("/delete/:id", Pets.delete);

module.exports = petsRoutes;