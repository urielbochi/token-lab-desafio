const express = require("express");
const router = express.Router();
const eventController = require("../controller/eventController");


router.get("/", eventController.getUserEvent);
router.post("/", eventController.create);
router.delete("/:id", eventController.deleteEvent);
router.patch("/edit/", eventController.editEvent);

module.exports = router;
