const express = require("express");
const router = express.Router();
const eventController = require("../controller/eventController");

router.get("/list/:id", eventController.getUserEvent);
router.post("/create", eventController.create);
router.delete("/delete", eventController.deleteEvent);
router.patch("/edit/", eventController.editEvent);

module.exports = router;
