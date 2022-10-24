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
                "messages": [
                    {
                        "user": "Senne",
                        "message": "Hello Joris!"
                    },
                    {
                        "user": "Joris",
                        "message": "Hello Senne!"
                    }
                ]
            }
        });
    }
};

//get message by id
const getById = (req, res) => {
    res.json({
        "status": "success",
        "message": "GET message with id = 1",
        "data": {
            "user": "Senne",
            "message": "Hello Joris!"
        }
    });
};

//create message
const create = (req, res) => {
    res.json({
        "status": "success",
        "message": "POST message",
        "data": 
            {
                "user": req.body.user,
                "message": req.body.message
            }
    });
};





module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.create = create;