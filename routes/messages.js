const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messages');

// GET

router.get("/", messageController.getAll);

router.get("/:id", messageController.getById);
// // PUT

// app.put('/api/v1/messages/:id', (req, res) => { // put = dient om de todolijst te updaten
//     res.send("PUT messages");
// });


// // DEL

// app.delete('/api/v1/messages/:id', (req, res) => { // :id -> om 1 specifiek message te deleten
//     res.send("DELETE messages " + req.params.id); // 
// });

module.exports = router;