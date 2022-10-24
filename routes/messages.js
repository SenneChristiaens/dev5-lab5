const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messages');

// GET

router.get("/", messageController.getAll);

router.get("/:id", messageController.getById);

// POST

router.post("/", messageController.create);

// // PUT

// router.put("/:id", messageController.updateById);




// // DEL

// app.delete('/api/v1/messages/:id', (req, res) => { // :id -> om 1 specifiek message te deleten
//     res.send("DELETE messages " + req.params.id); // 
// });

module.exports = router;