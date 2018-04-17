var friends=require("../app/data/friend")

module.exports =function (app){ 
    app.get("/api/friends", function(req, res) {
        res.json(friends); 
    }); 

    app.post("/api/survey", function (req, res) {
        console.log(req.body) 
        // res.json(req.body)
    }) 
}
 
