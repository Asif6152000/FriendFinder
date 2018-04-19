var friends=require("../app/data/friend")

module.exports =function (app){ 
    app.get("/api/friends", function(req, res) {
        res.json(friends); 
    }); 

    app.post("/api/survey", function (req, res) {
        console.log(req.body); 
        var user=req.body; 
        var allDiff=[]; 

        
        for (var i=0; i<friends.length; i++ ) {
            var storedFriends= friends[i]
            var difference= 0; 
            

            for (var j=0; j<user.scores.length; j++  ) {
                //console.log("Loop Running");
                //var parseUserScore=parseInt (user.scores[j]) 
                var calDiff = Math.abs (parseInt (user.scores[j])-parseInt(storedFriends.scores[j])); 
                //console.log(user.scores[j]);
                difference += calDiff; 

                
            } 
            storedFriends.totalDiff = difference
            
        } 
        
         
        
         function sortUsersByDiff (a, b) {
             return a.totalDiff - b.totalDiff; 
            
         }
         friends.sort(sortUsersByDiff) 
         console.log(friends); 
         res.json(friends[0]); 
    }) 

}
 
