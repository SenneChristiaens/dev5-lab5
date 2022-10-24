const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messages');

// GET

router.get("/", messageController.getAll);

router.get("/:id", messageController.getById);

// POST

router.post("/", messageController.create);

// // PUT

router.put("/:id", messageController.update);

// // DEL

router.delete("/:id", messageController.deleteMessageById);

module.exports = router;