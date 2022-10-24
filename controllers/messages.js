const getAll = (req, res) => {
    if (req.query.user) {
        res.json({
            "status": "success",
            "message": `GET all messages for user = ${req.query.user}`,
            "data": {
                "user": req.query.user,
            }
        });
    } else {
        res.json({
            "status": "success",
            "message": "GET all messages",
            "data": {
                "messages": "all messages"
            }
        });
    }
};

module.exports.getAll = getAll;